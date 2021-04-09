function turnBW(){
    //turns almost everything black and white
    //get the body element
    var mainBody = document.getElementById("bod");
    // an alternative if statement..
    mainBody.style.color != 'white' ?   //if font colour is not black
    mainBody.style.color = 'white' : mainBody.style.color = 'black'; //otherwise

    mainBody.style.backgroundColor != 'black' ?
    mainBody.style.backgroundColor = 'black' : mainBody.style.backgroundColor = 'white';
    
    var header = document.getElementById("header");

    header.style.color != 'black' ?   
    header.style.color = 'black' : header.style.color = 'white'; 

    header.style.backgroundColor != 'white' ?
    header.style.backgroundColor = 'white' : header.style.backgroundColor = 'rgb(2, 2, 58)';

    

    var buttons = document.getElementsByClassName("btn");

    buttons.style.color != 'black' ?
    buttons.style.color = 'black' : buttons.style.color = 'darkgoldenrod';

}