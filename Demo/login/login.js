// Lấy dữ liệu từ cục users
let users = JSON.parse(localStorage.getItem("users")) || [];
// Lấy dữ liệu người dùng nhập vào
let form = document.getElementById("login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = document.getElementById("username").value;
  let userPassword = document.getElementById("password").value;
  // So sánh dữ liệu đó với dữ liệu trong user
  // C1: find()=> tìm kiếm username tồn tại trong mảng users
  let findUser = users.find((e) => e.name == userName);
  //  C2: for (let i = 0; i < users.length; i++) {
  //     if (users[i].name == userName) {
  //       console.log(users[i]);
  //       break;
  //     }
  //   }
  // Nếu tổn tại thì đăng nhập thành công và chuyển sang trang chủ
  if (findUser && findUser.password == userPassword) {
    Swal.fire({
      title: "Đăng nhập thành công",
      text: "You clicked the button!",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location.href = "../register/register.html";
      }
    });
  } else {
    // Nếu thất bại thì nhập lại
    alert("Đăng nhập thất bại");
  }
});
