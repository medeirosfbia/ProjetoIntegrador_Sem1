function UserVisible() {
    document.getElementById('user-container').style.display = 'flex';
    document.getElementById('register-button').style.display = 'none';
    document.getElementById('login-button').style.display = 'none';
}

function InputFilled() {
    if (document.getElementById('user').value != '' && document.getElementById('password').value != '') {
        UserVisible();
        Username();
        DarkenHidden(Title('r'));
    } else {
        alert('Preencha todos os campos');
    }
}

function Username() {
    var name = document.getElementById('user').value;
    document.getElementById('nameuser').innerHTML = name;
}

function UserInvisible() {
    document.getElementById('user-container').style.display = 'none';
    document.getElementById('register-button').style.display = 'flex';
    document.getElementById('login-button').style.display = 'flex';
}

function toggleDropdown() {
    var dropdown = document.getElementById("user-dropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

function logout() {
    UserInvisible();
    var dropdown = document.getElementById("user-dropdown");
    dropdown.style.display = "none"; // Esconde o dropdown ao fazer logout
    alert("Você foi desconectado");
}

function dropdownAlterScreen(){
    var dropdown = document.getElementById("user-dropdown");
    dropdown.style.display = "none"; // Esconde o dropdown ao fazer logout

}
