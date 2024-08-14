function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function(){
    const name = document.getElementById("nombre").value.trim()
    const lastName = document.getElementById("apellido").value.trim()
    const email = document.getElementById("email").value.trim()
    const pasword = document.getElementById("password1").value.trim()
    const repPassword = document.getElementById("password2").value.trim()
    const term = document.getElementById("terminos").checked
    if ( pasword === repPassword && term.checked )
        showAlertSuccess();
    else
        showAlertError(); 
})