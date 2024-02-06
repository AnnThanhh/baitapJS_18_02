function Validation() {
  this.kiemTraTaiKhoan = function (value, tbId, message) {
    if (value === "") {
      getEle(tbId).innerHTML = message;
      return false;
    }

    getEle(tbId).innerHTML = "";
    return true;
  };

  this.kiemTraTen = function (value, tbId, message) {
    if (value === "") {
      getEle(tbId).innerHTML = message;
      return false;
    }

    getEle(tbId).innerHTML = "";
    return true;
  };

  this.kiemTraEmail = function (value, tbId, message) {
    if (value === "") {
      getEle(tbId).innerHTML = message;
      return false;
    }

    getEle(tbId).innerHTML = "";
    return true;
  };

  this.kiemTraMaKhau = function (value, tbId, message) {
    if (value === "") {
      getEle(tbId).innerHTML = message;
      return false;
    }

    getEle(tbId).innerHTML = "";
    return true;
  };

  this.kiemTraNgay = function (value, tbId, message) {
    if (value === "") {
      getEle(tbId).innerHTML = message;
      return false;
    }

    getEle(tbId).innerHTML = "";
    return true;
  };

  this.kiemTraLuong = function (value, tbId, message) {
    if (value === "") {
      getEle(tbId).innerHTML = message;
      return false;
    }

    getEle(tbId).innerHTML = "";
    return true;
  };

  this.kiemTraChucVu = function (value, tbId, message) {
    if (value === "" || value === "Chọn chức vụ") {
      getEle(tbId).innerHTML = message;
      return false;
    }

    getEle(tbId).innerHTML = "";
    return true;
  };

  this.kiemTraGio = function (value, tbId, message) {
    if (value === "") {
      getEle(tbId).innerHTML = message;
      return false;
    }

    getEle(tbId).innerHTML = "";
    return true;
  };
}
