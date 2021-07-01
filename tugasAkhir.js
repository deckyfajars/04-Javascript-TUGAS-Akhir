function buat_login(){
  var a = document.getElementById("X");
  a.parentElement.removeChild(a);

  var b = document.createElement("p");
  b.className = "tulisan_login";
  b.innerHTML = "Silahkan MENDAFTAR";
  var c = document.getElementsByTagName("div")[0];
  c.appendChild(b);

  var form = document.createElement("FORM");
  c.appendChild(form);
  var kata1 = document.createElement("kata1");
  kata1.innerHTML = "Nama User";
  form.appendChild(kata1);
  var input1 = document.createElement("input");
  input1.type = "text";
  input1.placeholder = "Nama User.."
  input1.name = "nama_user";
  input1.className = "form_login";
  form.appendChild(input1);

  var kata2 = document.createElement("kata1");
  kata2.innerHTML = "Nomer Handphone";
  form.appendChild(kata2);
  var input2 = document.createElement("input");
  input2.type = "number";
  input2.placeholder = "Nome Handphone."
  input2.name = "noHp";
  input2.className = "form_login";
  form.appendChild(input2);

  var kata3 = document.createElement("kata1");
  kata3.innerHTML = "Username";
  form.appendChild(kata3);
  var input3 = document.createElement("input");
  input3.type = "text";
  input3.placeholder = "Username atau email .."
  input3.name = "username";
  input3.className = "form_login";
  form.appendChild(input3);

  var kata4 = document.createElement("kata1");
  kata4.innerHTML = "Password";
  form.appendChild(kata4);
  var input4 = document.createElement("input");
  input4.type = "password";
  input4.placeholder = "Password ..";
  input4.name = "password";
  input4.className = "form_login";
  form.appendChild(input4);

  var tombol = document.createElement("input");
  tombol.value = "DAFTAR SEKARANG";
  tombol.type = "submit";
  tombol.className = "tombol_login";
  form.appendChild(tombol);

}
