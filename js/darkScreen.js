window.site = Document.title
function Title(rwe, newSite){
    
    if(rwe == 'r'){
        return site
    }else if(rwe == 'e'){
        document.title = site 
    }else{
        site = newSite
    }
}

function AllVisibles(){
    var els = document.getElementsByClassName("transition");
    for(el of els){
        el.style.visibility = 'inherit'
    }
}

function LoginVisible(){
    DarkenHidden(Title('r'))

    setTimeout(() =>{
    document.getElementById("login-content").style.visibility = 'visible'
    document.getElementById("login-content").classList.add("visible")
    document.title = "LogQuest | Log-in"
    AllVisibles()}, 310)
}
function SignInVisible(){
    DarkenHidden(Title('r'))

    setTimeout(() =>{
        document.getElementById("signin-content").style.visibility = 'visible'
        document.getElementById("signin-content").classList.add("visible")
        document.title = "LogQuest | Sign-in"
        document.getElementById("signin-first-part").style.display = "block"
        document.getElementById("signin-second-part").style.display = "none"
        AllVisibles()
    }, 310)
    
}

function DarkenHidden(site){

    
    var els = document.getElementsByClassName("transition");
    var users = document.getElementsByClassName("user");
    var passwords = document.getElementsByClassName("password");

    for(user of users){
        user.value = ''
    }

    for (password of passwords){
        password.value = ''
    }

    for(el of els){
        el.style.visibility = 'hidden'
    }

    setTimeout(() => {
        document.getElementsByClassName("visible")[0].style.visibility = 'hidden'
        document.getElementsByClassName("visible")[0].classList.remove('visible')
        Title('e', site)
    }, 300);
}


function SignInSecondPart(){
    document.getElementById("signin-first-part").style.display = "none"
    document.getElementById("signin-second-part").style.display = "block"
}
