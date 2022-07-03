export default class DocumentDesign {
  constructor({
    id,
    congTrinh,
    diaDiem,
    chuDauTu,
    donViTK,
    ngayNhan,
    ngayTra,
    nhom,
    loaiHinh,
    loaiVB,
    soVB,
    ngayVB,
    thuPhi,
  }) {
    this.id = id || "";
    this.congTrinh = congTrinh || "";
    this.diaDiem = diaDiem || "";
    this.chuDauTu = chuDauTu || "";
    this.donViTK = donViTK || "";
    this.ngayNhan = ngayNhan || "";
    this.ngayTra = ngayTra || "";
    this.nhom = nhom || "";
    this.loaiHinh = loaiHinh || "";
    this.loaiVB = loaiVB || "";
    this.soVB = soVB || "";
    this.ngayVB = ngayVB || "";
    this.thuPhi = thuPhi || 0;
  }
}
