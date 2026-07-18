import { Form, Input, Button, message } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

interface Story {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  category: string;
}

const UpdateStory = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { data: story, isLoading } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data as Story;
    },
    enabled: !!id,
  });
  useEffect(() => {
    if (story) {
      form.setFieldsValue(story);
    }
  }, [story, form]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: Partial<Story>) => {
      const res = await axios.put(`http://localhost:3000/stories/${id}`, values);
      return res.data;
    },
    onSuccess: () => {
      message.success("Sửa truyện thành công!");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      navigate("/");
    },
    onError: () => {
      message.error("Sửa truyện thất bại!");
    },
  });
  const handleFinish = (values: Story) => {
    mutate(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      disabled={isLoading || isPending}
      style={{ maxWidth: 500, margin: "0 auto" }}
    >
      <Form.Item
        label="Tên truyện"
        name="title"
        rules={[{ required: true, message: "Nhập tên truyện" }]}
      >
        <Input placeholder="Nhập tên truyện" />
      </Form.Item>

      <Form.Item
        label="Tác giả"
        name="author"
        rules={[{ required: true, message: "Nhập tác giả" }]}
      >
        <Input placeholder="Nhập tên tác giả" />
      </Form.Item>

      <Form.Item label="Ảnh (URL)" name="image">
        <Input placeholder="https://..." />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={3} placeholder="Nhập mô tả truyện" />
      </Form.Item>

      <Form.Item label="Thể loại" name="category">
        <Input placeholder="Nhập thể loại truyện" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isPending}>
          Cập nhật
        </Button>
        <Button
          style={{ marginLeft: 8 }}
          onClick={() => navigate("/")}
          disabled={isPending}
        >
          Hủy
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateStory;