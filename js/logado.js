function UserVisible() {
    document.getElementById('user-container').style.display = 'flex';
    document.getElementById('register-button').style.display = 'none';
    document.getElementById('login-button').style.display = 'none';
}

function InputFilled(type) {
    if ((document.getElementById('loginUser').value != '' && document.getElementById('loginPassword').value != '') || (document.getElementById('btncheck1').checked == true && document.getElementById('signEmail').value != '' && document.getElementById('signPassword').value != '') || (document.getElementById('sign2Username').value != '' && document.getElementById('sign2Birth').value != '')) {
        switch(type){
            case 'log':
                UserVisible();
                Username();
                DarkenHidden(Title('r'));
                break

            case 'sign1':
                SignInSecondPart()
                break

            case 'sign2':
                LoginVisible()
                
                break

            default:
                break
        }

    } else {
        alert('Preencha todos os campos');
    }
}

function Username() {
    var name = document.getElementById('loginUser').value;
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

function InputUsername() {
    // Pegar o nome do usuário do elemento <p>
    var name = document.getElementById('nameuser').textContent; 
  
    // Enviar o nome do usuário para o iframe
    const iframe = document.getElementById('iframeConf').contentWindow;
    iframe.postMessage(name, '*'); 
  }

