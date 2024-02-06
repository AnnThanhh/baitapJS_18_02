function NhanVien(
  _tkNV,
  _tenNV,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam,
  _tongLuong
) {
  this.tkNV = _tkNV;
  this.tenNV = _tenNV;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.xepLoai = 0;

  this.tinhTongLuong = function () {
    if (this.chucVu === "Chọn chức vụ") {
      alert("Vui lòng Chọn chức vụ");
    } else if (this.chucVu === "Sếp") {
      this.tongLuong = Number(this.luongCoBan) * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      this.tongLuong = Number(this.luongCoBan) * 2;
    } else {
      this.tongLuong = Number(this.luongCoBan) * 1;
    }
  };

  this.xepLoaiNV = function () {
    if (this.gioLam >= 192) {
      this.xepLoai = "Xuất Sắc";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      this.xepLoai = "Giỏi";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      this.xepLoai = "Khá";
    } else {
      this.xepLoai = "Trung Bình";
    }
  };
}
