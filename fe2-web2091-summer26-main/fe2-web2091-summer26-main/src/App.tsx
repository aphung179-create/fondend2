import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import StoryList from "./StoryList";
import AddStory from "./AddStory";
// import Lab1 from "./lab2n";
// import lab1 from "./Lab1";
// import Lab3 from "./Lab3";
function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>LOID</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/AddStory" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với LOID</h1>
        {/* <Lab1 />
        <Lab2 />
        <Lab3 /> */}
        <StoryList />
        <AddStory />
      </div>

      <Toaster />
    </>
  );
}

export default App;
