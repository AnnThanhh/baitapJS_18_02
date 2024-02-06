const dsnv = new DSNV();
const validation = new Validation();

getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

function layThongTinNhanVien() {
  const _tkNV = getEle("tknv").value;
  const _tenNV = getEle("name").value;
  const _email = getEle("email").value;
  const _matKhau = getEle("password").value;
  const _ngayLam = getEle("datepicker").value;
  const _luongCoBan = getEle("luongCB").value;
  const _chucVu = getEle("chucvu").value;
  const _gioLam = getEle("gioLam").value;

  let isValid = true;

  isValid &= validation.kiemTraTaiKhoan(
    _tkNV,
    "tbTKNV",
    "(*) Tài khoản tối đa 4 - 6 ký số, không để trống"
  );

  isValid &= validation.kiemTraTen(
    _tenNV,
    "tbTen",
    "(*) Tên nhân viên phải là chữ và không được để trống"
  );

  isValid &= validation.kiemTraEmail(
    _email,
    "tbEmail",
    "(*) Email phải đúng định dạng và không được để trống"
  );

  isValid &= validation.kiemTraMaKhau(
    _tkNV,
    "tbMatKhau",
    "(*) Mật khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống"
  );

  isValid &= validation.kiemTraNgay(
    _tenNV,
    "tbNgay",
    "(*) Ngày làm không để trống, định dạng mm/dd/yyyy"
  );

  isValid &= validation.kiemTraLuong(
    _email,
    "tbLuongCB",
    "(*) Lương không được để trống"
  );

  isValid &= validation.kiemTraChucVu(
    _email,
    "tbChucVu",
    "(*) Chức vụ phải chọn chức vụ hợp lệ"
  );

  isValid &= validation.kiemTraGio(
    _email,
    "tbGiolam",
    "(*) Số giờ làm trong tháng 80 - 200 giờ, không để trống"
  );

  if (!isValid) {
    return null;
  }

  const nv = new NhanVien(
    _tkNV,
    _tenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
  );

  nv.tinhTongLuong();
  nv.xepLoaiNV();
  return nv;
}

function hienThiDanhSachNhanVien(data) {
  let content = "";
  for (let i = 0; i < data.length; i++) {
    const nv = data[i];
    content += `
        <tr>
            <td>${nv.tkNV}</td>
            <td>${nv.tenNV}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
                <button class="btn btn-info" onclick="editNV('${nv.tkNV}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteNV('${nv.tkNV}')">Delete</button>
            </td>
        </tr>
    `;
  }
  getEle("tableDanhSach").innerHTML = content;
}

/**
 * Xoa nhân viên
 */
function deleteNV(tkNV) {
  dsnv.xoaNV(tkNV);
  hienThiDanhSachNhanVien(dsnv.arr);
  setLocalStorage();
}

/**
 * Lưu mảng nhân viên xuống localStorage
 */
function setLocalStorage() {
  // Chuyển mảng nhân viên thành chuỗi
  const arrString = JSON.stringify(dsnv.arr);
  // Lưu xuống localStorage
  localStorage.setItem("DSNV", arrString);
}

/**
 * Lấy mảng nhân viên từ localStorage
 */
function getLocalStorage() {
  if (!localStorage.getItem("DSNV")) return;

  // Lấy mảng nhân viên từ localStorage
  const arrString = localStorage.getItem("DSNV");
  // Chuyển mảng nhân viên từ chuỗi => JSON
  const arrJSON = JSON.parse(arrString);
  // Phục hồi data cho dssv.arr
  dsnv.arr = arrJSON;
  // Hiển thị danh sách nhân viên
  hienThiDanhSachNhanVien(dsnv.arr);
}

/**
 * Thêm nhân viên
 */
function themNV() {
  const nv = layThongTinNhanVien();
  if (!nv) return;
  dsnv.themNV(nv);
  hienThiDanhSachNhanVien(dsnv.arr);

  setLocalStorage();
}

function resetForm() {
  getEle("tknv").value = "";
  getEle("tknv").disabled = false;

  getEle("name").value = "";
  getEle("email").value = "";
  getEle("password").value = "";
  getEle("datepicker").value = "";
  getEle("luongCB").value = "";
  getEle("chucvu").value = "Chọn chức vụ";
  getEle("gioLam").value = "";

  getEle("btnCapNhat").style.display = "none";
  getEle("btnThemNV").style.display = "inline-block";
}

/**
 * Edit SV
 */
function editNV(id) {
  const nv = dsnv.layThongTinNV(id);
  if (nv) {
    // Hiển thị nút cập nhật
    getEle("btnCapNhat").style.display = "inline-block";
    // Ẩn nút thêm
    getEle("btnThemNV").style.display = "none";

    // Hiển thị thông tin sinh viên lên form
    getEle("tknv").value = nv.tkNV;
    getEle("tknv").disabled = true;
    getEle("name").value = nv.tenNV;
    getEle("email").value = nv.email;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.ngayLam;
    getEle("luongCB").value = nv.luongCoBan;
    getEle("chucvu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;
  }
}

/**
 * Cập nhật nhân viên
 */
function updateNV() {
  const nv = layThongTinNhanVien();
  dsnv.capNhapNV(nv);
  hienThiDanhSachNhanVien(dsnv.arr);
  setLocalStorage();
}

/**
 * Tim kiem SV
 * callback function: hàm có tham số, tham số là 1 hàm khác
 */
getEle("searchName").addEventListener("keyup", function () {
  // Lấy từ khóa tìm kiếm
  const keyword = getEle("searchName").value;
  const mangTimKiem = dsnv.timKiemNV(keyword);
  hienThiDanhSachNhanVien(mangTimKiem);
});
