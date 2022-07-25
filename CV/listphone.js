let phone1 = new Phone('Iphone 13', 'IPHONE', '32.000.000Đ', '../img/iphone1.jpg');
let phone2 = new Phone('Iphone 12', 'IPHONE', '35.000.000Đ', '../img/iphone2.png');
let phone3 = new Phone('Iphone 11', 'IPHONE', '31.000.000Đ', '../img/iphone3.png');
let phone4 = new Phone('Samsung', 'SAMSUNG', '32.000.000Đ', '../img/iphone1.jpg');
let phone5 = new Phone('Oppo', 'OPPO', '35.000.000Đ', '../img/oppo1.png');
let phone6 = new Phone('Asus', 'ASUS', '31.000.000Đ', '../img/asus1.png');
let array = [phone1, phone2, phone3, phone4, phone5, phone6];
let manage = new PhoneManagement(array);

function addPhone() {
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let price = document.getElementById("price").value;
    let img = document.getElementById("img").value;

    let phone = new Phone(name,type,price,img);
    manage.addPhone(phone);
    manage.showList();
    clear();
}

function clear() {
    document.getElementById("name").value = "";
    document.getElementById("type").value = "";
    document.getElementById("price").value = "";
    document.getElementById("img").value = "";

}

function deletePhone(index) {
    manage.delete(index);
    manage.showList();
}

let phoneName = 0;
function editPhone(name) {
    let phone = manage.findPhone(name);
    document.getElementById("name").value = phone.name;
    document.getElementById("type").value = phone.type;
    document.getElementById("price").value = phone.price;
    document.getElementById("img").value = phone.img;
    phoneName = name;
}

function updatePhone() {
    let  name = document.getElementById("name").value;
    let  type = document.getElementById("type").value;
    let  price = document.getElementById("price").value;
    let  img = document.getElementById("img").value;

    let phone = manage.findPhone(phoneName);
    manage.editPhone(phone, name, type, price, img);
    manage.showList();
    clear();

}

manage.showList();


function checkAdmin() {
    let username = localStorage.getItem("username")
    let data = ""
    if (username === null) {
        data += "<div id='admin' style=\"\n" +
            "    height: 60px;\n" +
            "\"><a href='login.html' style=\"\n" +
            "    text-decoration: none;\n" +
            "    font-size: 23px;\n" + " color: black;\n" + " padding: 10px;\n " + " background-color: #dedddd;\n " +
            "\">Đăng nhập</a></div>"
        document.getElementById("header").innerHTML = data
        return true;
    } else {
        data += "<div id='admin' style=\"\n" +
            "    height: 60px;\n" +
            "\"><p>Tài khoản: " + username + "</p>" +
            "<a onclick='logout()' href='index.html'>Đăng xuất</a></div>"
        document.getElementById("header").innerHTML = data
        return false;
    }
}

function logout() {
    localStorage.clear()
}