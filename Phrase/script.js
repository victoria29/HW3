function getText() {
   var inputText = document.getElementById("inputText").value;
   var words = inputText.split(" ");
   var length = words.length;
   var patt;
   var result;
   var myList;

   words[0] = words[0].toUpperCase();
   words[length-1] = words[length-1].toLowerCase();
   words[length-2] = words[length-2].toLowerCase();

    myList = '<ul>';
    for (i = 0; i < words.length; i++) {
        myList += "<li>" + words[i] + "</li>";
    }
    myList += "</ul>";
    document.getElementById('demo').innerHTML = myList;

    patt = new RegExp("А","gi");
    result = inputText.match(patt);//.length;
    if(result == null){
        alert("Буквы \"а\" в вашей фразе нет!");
    }else{
        result = result.length;
        alert("Количество букв \"a\"= " + result);
    }
}

function clearText() {
    document.getElementById("inputText").value = "";
}