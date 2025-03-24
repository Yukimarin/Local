let users = JSON.parse(localStorage.getItem("users")) || [];

// Nhớ validate dữ liệu => regex ??????
let form = document.getElementById("register-main-form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // ngăn reload trang
  // Khi người dùng đăng ký => lấy được dữ liệu người dùng
  let userName = document.getElementById("username").value;
  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("password").value;
  console.log("Lấy thông tin=>", userName, userEmail, userPassword);
  // Đưa dữ liệu đó vào trong mảng users
  // users.push({id:..., name:..., email:...,password:....})
  let newUser = {
    id: Math.floor(Math.random() * 10000),
    name: userName,
    email: userEmail,
    password: Number(userPassword),
  };
  users.push(newUser);
  // Lưu trữ dữ liệu users vào trong localStorage
  localStorage.setItem("users", JSON.stringify(users));
  // và chuyển đến trang đăng nhập
  window.location.href = "../login/login.html";
});
