function turnBW(){
    //turns almost everything black and white
    
    var mainBody = document.getElementById("bod");  //get the body element
    
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
}
