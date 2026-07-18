import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import StoryList from "./StoryList";
import AddStory from "./AddStory";
import UpdateStory from "./updateStory";

const HomePage = () => (
  <>
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <h2 className="text-2xl font-semibold text-left">Danh sách truyện</h2>
      <AddStory />
    </div>
    <StoryList />
  </>
);

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>LOID</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/list" className="hover:text-gray-200">
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<HomePage />} />
          <Route path="/stories/:id/edit" element={<UpdateStory />} />
          <Route path="*" element={<p>Không tìm thấy trang</p>} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;
