var login = document.getElementById("login");
login.addEventListener("click", getValue);
function getValue(event) {
  event.preventDefault()
  let numberphone = document.getElementById("number-phone").value;
  let hovaten = document.getElementById("ten").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let nhaplaimatkhau = document.getElementById("repassword").value;
  let Tuoi = document.getElementById("age").value;
  if (email === "") {
    alert("Email không được để trống");
  } else if(numberphone === ""){
      alert("Phone không được để trống"); 
  } else if(hovaten === ""){
    alert("ho va ten không được để trống");
  } else if(password === ""){
    alert(" mat khau không được để trống");
  } else if(nhaplaimatkhau !== password ){
    alert("mat khau khong trung khop");
  } else if(Tuoi === ""){
    alert(" tuoi không được để trống");
  }
   else {
    // alert("Chào mừng bạn " + email + " đã đăng nhập");
    location.href =
      "https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-yellow-lanterns-watermelon-and-rice-dumplings-vietnamese-new-year-background-image_557854.jpg";
  }
}