const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

const error = (input,message) => {
  input.className = 'form-control is-invalid'
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = 'invalid-feedback'
}
const success = (input) => {
  input.className = 'form-control is-valid'
}
const checkedRequired = (inputs) => {
  inputs.forEach(function(input){
    if (input.value === ''){
      error(input,`${input.id} is required`);
    }else{
      success(input);
    }
  });
};
const checkedEmail = (input) => {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value)){
    success(input)
  }else if (input.value ==='') {
    error(input,`${input.id} is required`);
  }
  else{
    error(input,'Dont forget use "@" your e-mail');
  }
  //return re.text(String(email).toLowerCase());
};
const checkedLength = (input,min,max) => {
  if (input.value === ''){
    error(input,`${input.id} is requierd`);
  } else if(input.value.length < min) {
    error(input,`${input.id} must be at least ${min} characters`);
  }else if(input.value.length > max) {
    error(input,`${input.id} must be a maximum of ${max} characters`);
  }else{
    success(input);
  }
};
const checkedPassword = (input1,input2) => {
  if (input1.value !== input2.value){
    error(input2,'Passwords Do Not Match');
  }
}
const checkedPhone = (input) => {
  var phn = /^\+?\d{2}[- ]?\d{3}[- ]?\d{6}$/;
  if(input.value === ''){
    error(input,`${input.id} is requierd`);
  }else if(!phn.test(input.value)){
    error(input,'Phone must be 11 character');
  }else{
    success(input);
  }
}

form.addEventListener('submit',function (e) {
  e.preventDefault();
  checkedRequired([username,email,password,repassword,phone]);
  checkedEmail(email);
  checkedLength(username,7,15);
  checkedLength(password,4,50);
  checkedPassword(password,repassword);
  checkedPhone(phone);

})



