// Kiểu dữ liệu nguyên thủy
let number = 10;
let fullName = "Nguyen Tien Minh";
// Kiểu dữ liệu phức tạp
let arr = [1, 2, 3, 4];
let student = {
  name: "bach bach bach",
  age: 16,
};

// LocalStorage => lưu trữ dữ liệu => setItem("name", value) và getItem("name")
localStorage.setItem("minh", number); //10
localStorage.setItem("name", fullName);
localStorage.setItem("arr", arr); // 1,2,3,4
localStorage.setItem("student", student); // [object][object]
// Đối với mảng và object thì phải convert dữ liệu sang string: JSON.stringify
localStorage.setItem("arr", JSON.stringify(arr)); // 1,2,3,4
localStorage.setItem("student", JSON.stringify(student)); // [object][object]

// Lấy dữ liệu từ local=> getItem("name") => kiểu dữ liệu string => convert sang kiểu dữ liệu thích hợp
// JSON.parse
console.log(localStorage.getItem("minh"));
console.log(JSON.parse(localStorage.getItem("arr")));
console.log(JSON.parse(localStorage.getItem("student")));
