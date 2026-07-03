import { Table } from "antd";
  function lab1 () {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Major", dataIndex: "major", key: "major" },
  ];

  const dataSource = [
    { id: 1, name: "Tran Van A", age: 20, major: "IT", key: 1 },
    { id: 2, name: "Tran Van B", age: 21, major: "Business", key: 2 },
    { id: 3, name: "Tran Van C", age: 19, major: "Design", key: 3 },
  ];

  return <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 3 }} />;
}
  export default lab1;