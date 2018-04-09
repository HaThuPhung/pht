// Định nghĩa một mảng các phần tử sẽ bỏ vào giỏ hàng
    var gioMuaHang = [];

    $(document).ready(function () {
       // Hiển thị thông tin từ giỏ hàng
        HienThiGioHang();
    });


    // Sự kiện click các button Mua Hàng
    $(".Mua").click(function (){
        var button = $(this); // Lấy đối tượng button mà người dùng click
        var id = button.attr("id"); // id của sản phẩm là id của button
        var Ten = button.attr("data-name"); // name của sản phẩm là thuộc tính data-name của button
        var Gia = button.attr("data-price"); // price của sản phẩm là thuộc tính data-price của button
        var SL = 1; // Số lượng


        var item = {
            id: id,
            Tensp: Ten,
            Gia: Gia,
            SL: SL
        };

        var kt = false;
        if (gioMuaHang.length > 0) {
            $.each(gioMuaHang, function (index, value) {
                // Nếu mặt hàng đã tồn tại trong giỏ hàng thì chỉ cần tăng số lượng mặt hàng đó trong giỏ hàng.
                if (value.id == item.id) {
                    value.SL++;
                    kt = true;
                    return false;
                }
            });
        }

        // Nếu mặt hàng chưa tồn tại trong giỏ hàng thì bổ sung vào mảng
        if (!kt) {
            gioMuaHang.push(item);
        }        
        HienThiGioHang();
    });
    // Hiển thị giỏ hàng ra table
    function HienThiGioHang() {
            $("#BangGioHang > tbody").html("");
            // Duyệt qua mảng gioMuaHang để append từng item dòng vào table
            $.each(gioMuaHang, function (index, item) {
                var Sp = "";
                Sp += "<tr>";
                Sp += "<td>" + item.id + "</td>";
                Sp += "<td>" + item.Tensp + "</td>";
                Sp += "<td style='text-align: right'>" + item.Gia + "</td>";
                Sp += "<td style='text-align: right'>" + item.SL + "</td>";
                Sp += "<td style='text-align: right'>" + item.Gia * item.SL + "</td>";
                Sp += "</tr>";

                $("#BangGioHang > tbody:last").append(Sp);

            });
        }
    

