import { Table } from "antd";
import { Button } from "antd";
  function Lab3 () {
    const columns = [
      {
        "title" : 'Tên',
        "dataIndex" : 'name',
      },
      {
        "title" : 'Email',
        "dataIndex" : 'email',
     
      },
      {
        "title" : 'Tuổi',
        "dataIndex" : 'age',
      
      },
  
      {
        "title" : 'avatar',
        "dataIndex" : 'avatar',
        "render": (value: string) => (
          <img src={value}  alt="avatar" width={50} height={50} style={{borderRadius: '20%'}}/>
        ),
      },
      {
        "title" : 'action',
        render: (text:string) => (
          <>
            <Button  >Edit</Button>

            <Button >Delete</Button>
          </>
        ),  
      }, 
    ];
    const dataSource = [
      {
        "name" : 'Hit Van Loi',
        "email" : 'hitvanloi@gmail.com',
        "age" : 22,
        "avatar" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7Yg1ggjhKSkXPtqhBgdDOiKhBaQ4Ftps7VCyh5G80w&s=10'
      },
      {
        "name" : 'Trần Văn B',
          "email" : 'Trần Văn A',
        "age" : 23,
        "avatar" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7Yg1ggjhKSkXPtqhBgdDOiKhBaQ4Ftps7VCyh5G80w&s=10'
      },
      {
        "name" : 'Trần Văn C',
          "email" : 'Trần Văn A',
        "age" : 24,
        "avatar" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7Yg1ggjhKSkXPtqhBgdDOiKhBaQ4Ftps7VCyh5G80w&s=10'
      }
    ];
    return <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 3 }} />

  }
  export default Lab3;  