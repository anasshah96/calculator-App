function enterNum(numpad){
    var result = document.getElementById("result");
    result.value += numpad
}

function clearAll(){
    var result = document.getElementById("result");
    result.value = ""
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}

function _e(id){
    return document.getElementById(id);
} 


