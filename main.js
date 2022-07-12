// Bài Tập 1

/**Mô hình 3 khối :
 * Đầu vào
 * -Lương 1 ngày : 100.000đ
 * -Nhập số ngày làm vào ô input
 *
 * Xử lý
 * -Tạo function tính lương
 * -Tạo biến số ngày Làm = giá trị mà người dùng nhập trong input số ngày làm
 * -Tạo biến tiền Lương có giá trị = 0
 * -Tính tiền lương theo công thức :tiền lương = số ngày làm * 100 000
 * -Gán giá trị tiền lương sau khi tính = giá trị của input tiền lương
 *
 * Đầu ra
 * -Xuất ra giá trị tổng lương sau khi xử lí
 * -
 */

function tinhToan() {
  var ngayLam = document.getElementById("soNgayLam").value * 1;

  var tienLuong = 0;
  tienLuong = ngayLam * 100000;
  // console.log(tienLuong);

  document.getElementById("tongLuong").value = tienLuong.toLocaleString();
}

//Bài Tập 2

/**Mô hình 3 khối
 * Đầu vào:
 * -Nhập 5 số thực
 * -
 * Xử lí: tính giá trị trung bình của 5 số thự đạ nhập
 * -Tạo biến số thực 1 lấy giá trị value tại input 1
 * -Tạo biến số thực 2 lấy giá trị value tại input 2
 * -Tạo biến số thực 3 lấy giá trị value tại input 3
 * -Tạo biến số thực 4 lấy giá trị value tại input 4
 * -Tạo biến số thực 5 lấy giá trị value tại input 5
 * -Tạo biến số trung bình cộng = 0
 * -Tính số trung bình cộng của 5 giá trị value đã lấy bằng công thức: kết quả trung bình cộng = (value1 + value2 + value3 + value4 + value5) / 5
 * -Gán kết quả vào inner HTML footer
 *
 * Đầu ra:
 * -Xuất giá trị trung bình của 5 số thực ra màn hình
 * -
 */

function trungBinhCong() {
  var tagSoThuc1 = document.getElementById(`soThuc1`).value * 1;
  // console.log(`so thuc 1:`, tagSoThuc1);
  var tagSoThuc2 = document.getElementById(`soThuc2`).value * 1;
  // console.log(`so thuc 2:`, tagSoThuc2);
  var tagSoThuc3 = document.getElementById(`soThuc3`).value * 1;
  // console.log(`so thuc 3:`, tagSoThuc3);
  var tagSoThuc4 = document.getElementById(`soThuc4`).value * 1;
  // console.log(`so thuc 4:`, tagSoThuc4);
  var tagSoThuc5 = document.getElementById(`soThuc5`).value * 1;
  // console.log(`so thuc 5:`, tagSoThuc5);
  var tagTrungBinhCong = 0;
  tagTrungBinhCong =
    (tagSoThuc1 + tagSoThuc2 + tagSoThuc3 + tagSoThuc4 + tagSoThuc5) / 5;
  document.getElementById("ketQua").innerHTML = tagTrungBinhCong;
  document.getElementById("ketQua").style.textAlign = "center";
  document.getElementById("ketQua").style.backgroundColor = "purple";
  document.getElementById("ketQua").style.color = "white";
}

// Bài Tập 3

/**Mô hình 3 khối
 * Đầu vào:
 * -Giá USD : 23.500đ
 * -
 * Xử lí:
 * -Tạo function đổi tiền
 * -Tạo biến tiền USD = giá trị value từ input tiền USD mà user nhập vào
 * -Tạo biến tiền VND = 0
 * -Thực hiện quy đổi tiền USD sang tiền VND bằng công thức: tiền VND = tiền USD * 23500
 * -Gán giá trị số tiền vừa được tính theo công thức = vào gia trị value tại input tiền VND
 * -
 * -
 * Đầu ra:
 * -Xuất ra màn hình số tiền USD đã được quy đổi ra tiền VND
 * -
 */

function doiTien() {
  // console.log(`yes`);
  var tagTienUsd = document.getElementById("tienUsd").value * 1;
  // console.log("tienUSD:", tagTienUSD);
  var tagTienVnd = 0;
  tagTienVnd = tagTienUsd * 23500;
  var currentFormat = new Intl.NumberFormat("vn-VN");
  var result = "";
  result += "<p> Tiền VND : " + currentFormat.format(tagTienVnd) + " VND </p>";
  document.getElementById("tienVnd").innerHTML = result;
  document.getElementById("tienVnd").className =
    "card-footer bg-danger text-center  text-white";
}

// Bài Tập 4
/**Mô hình 3 khối
 * Đầu vào:
 * -Nhập chiều dài và chiều rộng
 * -
 * Xử lí:
 * -Tạo function tính toán
 * -Tạo biến chiều dài = giá trị value người dùng nhập trong input Chiều Dài
 * -Tạo biến chiều rộng = giá trị value người dùng nhập trong input Chiều rộng
 * -Tạo biến biến chu vi gán giá trị = 0
 * -Tạo biến diện tích dán giá trị = 0
 * -Tính chu vi theo công thức: chu vi = chiều dài * chiều rộng
 * -Tính diện tích theo công thức: diện tích = ( chiều dài + chiều rộng) * 2
 * -Gán giá trị chu vi vừa tính được = giá trị value của input chu vi
 * -Gán giá trị diện tích vừa tính = giá trị value của input diện tích
 * -
 * -
 * Đầu ra:
 * - Xuất kết quả chu vi & diện tích hình chữ nhật ra màn hình
 * -
 */
function xuLi() {
  var tagChieuDai = document.getElementById("chieuDai").value * 1;
  var tagChieuRong = document.getElementById("chieuRong").value * 1;
  // console.log(`dài:`, tagChieuDai);
  // console.log(`rộng:`, tagChieuRong);
  var tagChuVi = 0;
  var tagDienTich = 0;
  tagChuVi = tagChieuDai * tagChieuRong;
  tagDienTich = (tagChieuDai + tagChieuRong) * 2;
  // console.log(`chu vi :`, tagChuVi);
  // console.log(`dien tich:`, tagDienTich);
  document.getElementById(`chuVi`).value = tagChuVi;
  document.getElementById(`dienTich`).value = tagDienTich;
}

// Bài Tập 5

/**Mô hình 3 khối
 * Đầu vào:
 * -Nhập số có 2 chữ số bất kì
 * -
 * Xử lí:
 * -Tạo function tinhToan
 * -Tạo biến soThuc = giá trị value số lấy từ input mà người dùng nhập vào
 * -Tạo biến hangChuc = math.floor(soThuc / 10)
 * -Tạo biến hàngDonVi = soThuc % 10
 * -Tạo biến ketQua = 0
 * -Gán biến ketQua = hangChuc + hangDonVi
 * -Gán giá trị value của input xuất ra màn hình = giá trị của biến ketQua vừa tính được
 * Đầu ra:
 * -Xuất ra màn hình tổng 2 ký số đã nhập
 */
function process() {
  // console.log(`yes`);
  var tagSoThuc = document.getElementById(`soTuNhien`).value;
  // console.log(`số thực :`, tagSoThuc);
  var hangChuc = Math.floor(tagSoThuc / 10);
  var hangDonVi = tagSoThuc % 10;
  var tagKetQua = 0;
  // console.log(`hàng chục:`, hangChuc);
  // console.log(`hàng đơn vị:`, hangDonVi);
  tagKetQua = hangChuc + hangDonVi;
  var final = "";
  final += "<p>Kết Quả : " + tagKetQua + "</p>";
  document.getElementById(`result`).innerHTML = final;
  document.getElementById(`result`).className =
    "card-footer text-center bg-warning";
}
