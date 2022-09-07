/**
 Bai 1
    input: Số ngày làm việc
        ngày công = 25
        
    process: Lấy số ngày làm việc * lương 1 ngày (100.000)
        ngày công * 100.000
        
    out put
        tiền lương
 */

    document.getElementById("btn-tinh-luong").addEventListener("click", function() {

        var payPerDay = document.getElementById("txt-luong-ngay").value * 1;

        var workDay = document.getElementById("txt-ngay-lam").value * 1;

        if (payPerDay >= 0 && workDay > 0) {
        
            var payCheck = null;
    
            payCheck = workDay * payPerDay; 
    
            document.getElementById("tien-luong").innerHTML = `<div>Tiền lương = ${new Intl.NumberFormat('vn-VN').format(payCheck)} VNĐ</div>`
        } else {
            document.getElementById("tien-luong").innerHTML = `<div>Hãy nhập lại dữ liệu</div>`
        }
    })
    
    /**
     Bai 2
        input: nhập vào 5 số thực
            5 số thực = 5, 10, 15, 20, 25
            
        process: Lấy tổng 5 số vừa nhập chia cho 5
            
        out put: giá trị trung binh của 5 số 
     */
    
    document.getElementById("btn-so-tb").addEventListener("click", function() {

        var numb1 = document.getElementById("txt-so-1").value * 1;
        var numb2 = document.getElementById("txt-so-2").value * 1;
        var numb3 = document.getElementById("txt-so-3").value * 1;
        var numb4 = document.getElementById("txt-so-4").value * 1;
        var numb5 = document.getElementById("txt-so-5").value * 1;

        var result = null; 

        result = (numb1 + numb2 + numb3 + numb4 + numb5) / 5;

        document.getElementById("so-tb").innerHTML = `<div>Giá trị trung bình = ${result}</div>`
    })
    
    /**
     Bai 3
        input: nhập vào số tiền USD 
            số tiền USD = 10
            
        process: Lấy số tiền vừa nhập * 23.500
            
        out put: số tiền đã quy đổi
     */
    
        document.getElementById("btn-doi-tien").addEventListener("click", function() {

        var tienDo = document.getElementById("txt-usd").value * 1;

        const current = 23500;

        var tienViet = null; 

        if (tienDo >= 0) {

            tienViet = tienDo * current;

            document.getElementById("doi-tien").innerHTML = `<div>${new Intl.NumberFormat('vn-VN').format(tienViet)} VNĐ</div>`
        } else {
            document.getElementById("doi-tien").innerHTML = `<div>Hãy nhập lại số tiền</div>`
        }
        })
    
    /**
     Bai 4
        input: nhập vào chiều dài và chiều rộng
            chiều dài = 5
            chiều rộng = 10    
        process: 
            Chu vi = tổng chiều dài và chiều rộng nhân với 2
            Diện tích = chiều dài nhân với chiều rộng
            
        out put: diện tích và chu vi 
     */
    
        document.getElementById("btn-ket-qua").addEventListener("click", function () {

        var edge1 = document.getElementById("txt-chieu-dai").value * 1;

        var edge2 = document.getElementById("txt-chieu-rong").value * 1;

        var chuVi = null;

        var dienTich = null;

        if (edge1 > 0 && edge2 > 0) {
            chuVi = (edge1 + edge2) * 2;

            dienTich = edge1 * edge2;
    
            document.getElementById("ket-qua").innerHTML = `<div>Chu vi = ${chuVi}; Diện tích = ${dienTich}</div>`
        } else {
            document.getElementById("ket-qua").innerHTML = `<div>Hãy nhập lại độ dài</div>`
        }
        })




    
        /**
     Bai 5
        input: nhập vào 1 số có 2 chữ số 
            numb = 78    
        process: 
           tính số hàng đơn vị bằng cách chia numb cho 10 và lấy số dư,
           tính số hàng chục bằng cách chia numb cho 10 và lấy số nguyên
           lấy tổng của số hàng đơn vị cộng với hàng chục 
            
        out put: tổng của 2 ký số vừa nhập 
     */


        document.getElementById("btn-number").addEventListener("click", function() {

            var number = document.getElementById("txt-number").value * 1; 

            if(number / 10 > 1 && number > 0 && number < 100) {

            var firstNumb = Math.floor(number / 10);

            var secondNumb = number % 10;

            var outCome = firstNumb + secondNumb;
            
            document.getElementById("out-come").innerHTML = `<div>Tổng 2 số = ${outCome}</div>`

            } else {

            document.getElementById("out-come").innerHTML = `<div>Hãy nhập 1 số dương có 2 chữ số</div>`
            }
        })
    
        