import { Modal, Form, Input, Button, message, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
interface Story {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  category: string;
}
const AddStory = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
  queryKey: ["categories"],
  queryFn: async () => {
    const res = await axios.get("http://localhost:3000/categories");
    return res.data;
  },
});
const categoryOptions = categories?.map((category: any) => ({
  value: category.id,
  label: category.name,
}));


  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      const res = await axios.post("http://localhost:3000/stories", values);
      return res.data;
    },
    onSuccess: () => {
      message.success("Thêm truyện thành công!");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      form.resetFields();
      setOpen(false);
    },
    onError: () => {
      message.error("Thêm truyện thất bại!");
    },
  });

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => mutate(values))
      .catch(() => {});
  };

  return (
    <>
      
    
      
        <Form form={form} layout="vertical">
          <Form.Item
            label="Tên truyện"
            name="title"
            rules={[{ required: true, message: "Vui lòng nhập tên truyện" }]}
          >
            <Input placeholder="Nhập tên truyện" />
          </Form.Item>

          <Form.Item
            label="Tác giả"
            name="author"
            rules={[{ required: true, message: "Vui lòng nhập tác giả" }]}
          >
            <Input placeholder="Nhập tên tác giả" />
          </Form.Item>

          <Form.Item
            label="Ảnh (URL)"
            name="image"
            rules={[{ required: true, message: "Vui lòng nhập URL ảnh" }]}
          >
            <Input placeholder="https://..." />
          </Form.Item>

          <Form.Item label="Mô tả" name="description">
            <Input.TextArea rows={3} placeholder="Nhập mô tả truyện" />
          </Form.Item>

      <Form.Item
  label="Thể loại"
  name="category"
  rules={[{ required: true, message: "Vui lòng chọn thể loại" }]}
>
  <Select
    placeholder="Chọn thể loại"
    options={[
      { value: "Action", label: "Action" },
        { value: "Adventure", label: "Adventure" },
        { value: "Comedy", label: "Comedy" },
        { value: "Drama", label: "Drama" },
        { value: "Fantasy", label: "Fantasy" },
        { value: "Horror", label: "Horror" },
        { value: "Mystery", label: "Mystery" },
        { value: "Romance", label: "Romance" },
        { value: "Sci-Fi", label: "Sci-Fi" },
        { value: "Slice of Life", label: "Slice of Life" },
    ]}
     />
     </Form.Item>


     <Form.Item>
          <Button htmlType="submit" loading={isPending}>
            Submit
          </Button>
        </Form.Item>
         
        </Form> 
    </>
  );
};

export default AddStory;