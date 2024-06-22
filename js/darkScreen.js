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

function LoginVisible(){
    document.getElementById("login-content").style.visibility = 'visible'
    document.getElementById("login-content").classList.add("visible")
    document.title = "LogQuest | Log-in"
}
function SignInVisible(){
    document.getElementById("signin-content").style.visibility = 'visible'
    document.getElementById("signin-content").classList.add("visible")
    document.title = "LogQuest | Sign-in"
}



function DarkenHidden(site){
    var els = document.getElementsByClassName("transition");
    
    for(el of els){
        el.classList.remove("transition");
    }
    document.getElementsByClassName("visible")[0].style.visibility = 'hidden'
    document.getElementsByClassName("visible")[0].classList.remove('visible')
    Title('e', site)

    for(el of els){
        el.classList.add("transition");
    }
}



