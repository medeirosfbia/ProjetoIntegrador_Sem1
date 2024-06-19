window.site = ""
function Title(rw, newSite){
    
    if(rw == 'r'){
        return site
    }else{
        site = newSite
    }
}

function LoginVisible(){
    document.getElementById("login-content").style.visibility = 'visible'
    document.getElementById("login-content").classList.add("visible")
    document.title = "LogQuest | Log-in"
}
function DarkenHidden(site){
    var els = document.getElementsByClassName("transition");
    
    for(el of els){
        el.classList.remove("transition");
    }
    document.getElementsByClassName("visible")[0].style.visibility = 'hidden'
    document.getElementsByClassName("visible")[0].classList.remove('visible')
    document.title = site

    for(el of els){
        el.classList.add("transition");
    }
}

