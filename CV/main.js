// Tạo list hiển thị sản phẩm
class PhoneManagement {
    constructor(array) {
        this.phone = array
    }

    showList() {
        let table = '';
        for (let i = 0; i < this.phone.length; i++) {

            table += '<tr>';
            table += '<td>';
            table += this.phone[i].name;
            table += '</td>';

            table += '<td>';
            table += this.phone[i].type;
            table += '</td>';

            table += '<td>';
            table += this.phone[i].price;
            table += '</td>';

            table += '<td>';
            table += '<img width="100px" height="100px" src=" ' + this.phone[i].img + '">';
            table += '</td>';
            if (!checkAdmin()) {

                table += '<td>' +
                    '<button   type="button" onclick="deletePhone(' + i + ')">Delete</button> ' +
                    ' <button  type="button" onclick="editPhone(' + i + ')">Edit</button>' +
                    '</td>';
            }

            table += '</tr>';
        }
        document.getElementById('list-phone').innerHTML = table;
        document.getElementById("result").innerText = "Tổng Sản Phẩm: " + this.phone.length
    }

    addPhone(phone) {
        this.phone.push(phone);
    }

    delete(index) {
        this.phone.splice(index, 1);
    }

    findPhone(name) {
        return this.phone[name];
    }

    editPhone(phone, name, type, price, img) {
        phone.editPhone(name, type, price, img);
    }
}