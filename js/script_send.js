function telephoneCheck(str) {
  var patt = new RegExp(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm);
  return patt.test(str);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$("#button-form-send").click(function(e){
  if ($("#write__input-name").val() == "") {
    Swal.fire("Ошибка","Имя указано некорректно","error")
    return
  }

  if (!validateEmail($("#write__input-email").val())) {
    Swal.fire("Ошибка","Email указан некорректно","error")
    return
  }

  if (!telephoneCheck($("#write__input-phone").val())) {
    Swal.fire("Ошибка","Номер указан некорректно","error")
    return
  }

  var formData = new FormData();
  formData.append("Phone", $("#write__input-phone").val());
  formData.append("Email", $("#write__input-email").val());
  formData.append("Name", $("#write__input-name").val());
  formData.append("Message", $("#write__input-message").val());


  $.ajax({
      url:     "send.php", 
      type:     "POST", 
      data: formData,  
      processData: false,  
      contentType: false,
      success:function(data){
        console.log(data);
          Swal.fire("Успех!","Спасибо за обращение\nМы свяжемся с вами в самое ближайшее время","success")
          .then((result) => {
            ym(86052773,'reachGoal','click')
            location.reload();
          })
          
      },
      error: function(data){
          console.log("error");
          console.log(data);
      }
  });
})