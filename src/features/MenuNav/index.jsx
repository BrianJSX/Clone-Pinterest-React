import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

function MenuNav() {
  const router = useHistory();

  const handleLogout = () => { 
    localStorage.clear();
    router.push("/login");
  }

  return (
    <div className="MenuNav">
      <div className="MenuNav__title">
        <div>Tài khoản</div>
      </div>
      <div className="MenuNav__main">
        <div className="MenuNav__main-item">
          Thêm tài khoản
        </div>
        <div className="MenuNav__main-item">
          Mở khóa công cụ dành cho danh nghiệp
        </div>
      </div>
      <div className="MenuNav__title">
        <div>Tùy chọn khác</div>
      </div>
      <div className="MenuNav__main">
        <div className="MenuNav__main-item">
          Cài đặt
        </div>
        <div className="MenuNav__main-item">
          Điều chỉnh bảng tin nhà của bạn
        </div>
        <div className="MenuNav__main-item">
            Cài đặt ứng dụng Windows
        </div>
        <div className="MenuNav__main-item">
            Nhận trợ giúp
        </div>
        <div className="MenuNav__main-item" onClick={handleLogout}>
            Đăng xuất
        </div>
      </div>
    </div>
  );
}
export default MenuNav;
