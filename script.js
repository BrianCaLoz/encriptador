function encrypt() {

    var text = document.getElementById("entered_text").value.toLowerCase(); 

    //for img: i = take upper case and lower case; g = take all line or entered text; m = take multiple lines of entered text

    var encryptedText = text.replace(/e/img,"enter");
    var encryptedText = encryptedText.replace(/i/img,"imes");
    var encryptedText = encryptedText.replace(/a/img,"ai");
    var encryptedText = encryptedText.replace(/o/img,"ober");
    var encryptedText = encryptedText.replace(/u/img,"ufat");

    document.getElementById("result").innerHTML = encryptedText;
}

function decrypt() {

    var text = document.getElementById("entered_text").value.toLowerCase(); 

    //for img: i = take upper case and lower case; g = take all line or entered text; m = take multiple lines of entered text

    var encryptedText = text.replace(/enter/img,"e");
    var encryptedText = encryptedText.replace(/imes/img,"i");
    var encryptedText = encryptedText.replace(/ai/img,"a");
    var encryptedText = encryptedText.replace(/ober/img,"o");
    var encryptedText = encryptedText.replace(/ufat/img,"u");

    document.getElementById("result").innerHTML = encryptedText;
}

function copy(){
    var content = document.querySelector("#result");

    content.select();
    document.execCommand("copy");
    alert("El texto ha sido copiado.");
}

function clearIt() {
    document.getElementById('entered_text').value = "";
    document.getElementById('result').value = "";
    window.location.reload();
}