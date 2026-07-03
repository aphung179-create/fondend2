import { Table } from "antd";
// lab2
function ProductList() {
  const columns = [
    { title: "ID",          dataIndex: "id",       key: "id" },
    { title: "Product Name", dataIndex: "name",   key: "name" },
    { title: "Price",       dataIndex: "price",    key: "price" },
    { title: "Category",    dataIndex: "category", key: "category" },
  ];

  const dataSource = [
    { id: 1, name: "Laptop",     price: "1200",  category: "dien tu",  key: 1 },
    { id: 2, name: "tai nghe", price: "150",   category: "dien tu",       key: 2 },
    { id: 3, name: "may tinh", price: "12",    category: "dien tu",     key: 3 },
    { id: 4, name: "dien thoai",   price: "5",     category: "dien tu",  key: 4 },
    { id: 5, name: "may tinh", price: "800",   category: "dien tu", key: 5 },
  ];

  return <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 3 }} />;
}
export default ProductList;
