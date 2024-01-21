//Bài 1: Tính lương
/**
 * input:
 *      inputNum1
 *      inputNum2
 * process:
 *      B1: tạo các biến 
 *      B2: lấy giá trị từ form inputNum1, inputNum2
 *      B3: tìm tới thẻ btnSalary và gán sự kiện click
 *      B4: Xuất kết quả, thẻ txtSalary
 * 
 * 
 * output: 
 *      thành tiền: salary
 *      console log: thông báo kết quả
 *      xuất lên txtSalary
 */

document.getElementById("btnSalary").onclick = function () {
    let salary = document.getElementById("inputNum1").value * document.getElementById("inputNum2").value;
    console.log("Thành tiền: " + salary)
    document.getElementById("txtSalary").innerHTML = salary
}

//Bài 2: Tính điểm trung bình
/**
 * input: 
 * process:
 * output:
 */


document.getElementById("btnTB").onclick = function () {
    let e = document.querySelectorAll(".bai2 .form-control")
        , t = 0;
    for (let n = 0; n < e.length; n++)
        t += Number(e[n].value);
    document.getElementById("txtTB").innerHTML = t / e.length
}


//Bài 3: Quy đổi tiền
/**
 * input: 
 * process:
 * output:
 */

document.getElementById("btnCurrency").onclick = function () {
    let e = document.getElementById("usd").value
        , t = new Intl.NumberFormat("vn-VN").format(23500 * e);
    document.getElementById("txtCurrency").innerHTML = t
}

//Bài 4: Tính diện tích, chu vi hình chữ nhật
/**
 * input: 
 * process:
 * output:
 */


document.getElementById("btnCal").onclick = function () {
    let e = document.getElementById("width").value
        , t = document.getElementById("height").value
        , n = e * t
        , u = 2 * (Number(e) + Number(t));
    document.getElementById("txtCal").innerHTML = `\n        Diện tích: ${n};\n        Chu vi: ${u}\n    `
}

//Bài 5: Tính tổng 2 số
/**
 * input: 
 * process:
 * output:
 */

document.getElementById("btnSum").onclick = function () {
    let e = document.getElementById("number").value
        , t = Math.floor(e / 10)
        , n = e % 10;
    document.getElementById("txtSum").innerHTML = t + n
}
