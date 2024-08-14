function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function(){
    
})

function validarContra() {
    const password = document.getElementById("col-sm-6").value;
    if (password.length < 6) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
  }