import { Modal, Form, Input, Button, message, Upload } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const AddStory = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

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
      <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>
        Thêm truyện
      </Button>

      <Modal
        title="Thêm truyện mới"
        open={open}
        onOk={handleOk}
        onCancel={() => setOpen(false)}
        confirmLoading={isPending}
        okText="Thêm"
        cancelText="Hủy"
        destroyOnClose
      >
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
          <Form.Item label="Thể loại" name="category">
            <Input placeholder="Nhập thể loại truyện" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddStory;
