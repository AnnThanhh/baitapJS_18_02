function DSNV() {
  this.arr = [];

  this.themNV = function (nv) {
    this.arr.push(nv);
  };

  this.timViTriNV = function (tkNV) {
    let index = -1;
    for (let i = 0; i < this.arr.length; i++) {
      const nv = this.arr[i];
      if (nv.tkNV === tkNV) {
        index = i;
        break;
      }
    }
    return index;
  };

  this.xoaNV = function (tkNV) {
    const index = this.timViTriNV(tkNV);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  this.layThongTinNV = function (tkNV) {
    const index = this.timViTriNV(tkNV);
    if (index !== -1) {
      return this.arr[index];
    }
    return null;
  };

  this.capNhapNV = function (nv) {
    const index = this.timViTriNV(nv.tkNV);
    if (index !== -1) {
      this.arr[index] = nv;
    }
  };

  /**
   * 0. Khai báo biến mangTimKiem = []
   * 1. Duyệt mảng this.arr
   *    1.1. nv từ this.arr[i]
   *    1.2. Chuyển keyword về chữ thường
   *    1.3. Chuyển nv.tkNV về chữ thường
   *    1.4. Nếu tìm thấy nv.tkNV chứa từ khóa keyword
   *      => true: thêm nv vào mangTimKiem
   * 2. Trả về mangTimKiem
   */
  this.timKiemNV = function (keyword) {
    let mangTimKiem = [];
    for (let i = 0; i < this.arr.length; i++) {
      const nv = this.arr[i];
      const keywordLowerCase = keyword.toLowerCase();
      const xepLoaiLowerCase = nv.xepLoai.toLowerCase();
      if (xepLoaiLowerCase.indexOf(keywordLowerCase) !== -1) {
        mangTimKiem.push(nv);
      }
    }
    return mangTimKiem;
  };
}
