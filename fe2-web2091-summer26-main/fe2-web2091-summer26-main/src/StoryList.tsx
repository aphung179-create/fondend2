import { Table, Image, Spin, Popconfirm, message } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AddStory from "./AddStory";

const StoryList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });
const handleDelete = async (id: number) => {
  try {
    await axios.delete(`http://localhost:3000/stories/${id}`);
    message.success("Xóa truyện thành công!");
    window.location.reload();
  } catch (error) {
    message.error("Xóa truyện thất bại!");
  }
};
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={60} />,
    },
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "action",
      render: (_: any, record: any) =>{
        return <button onClick={() => handleDelete(record.id)}>Xóa</button>;
      }
    }
  ];

  if (isLoading) return <Spin />;

  if (isError) return <p>Lỗi khi tải dữ liệu</p>;

  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }}/>;
};

export default StoryList;