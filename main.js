const textarea = document.getElementById("textarea");

function f1(e){
    let value = e.value;
    textarea.style.fontSize = value + "px";
}

function f2(e){
    if(textarea.style.fontWeight == "bold"){
        textarea.style.fontWeight  ="normal";
        e.classList.remove("active");
    }
    else{
        textarea.style.fontWeight  = "bold";
        e.classList.add("active");
    }
}

function f3(e){
    if(textarea.style.fontStyle == "italic"){
        textarea.style.fontStyle = "normal";
        e.classList.remove("active");
    }
    else{
        textarea.style.fontStyle = "italic";
        e.classList.add("active");
    }
}

function f4(e){
    if(textarea.style.textDecoration == "underline"){
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else{
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}

