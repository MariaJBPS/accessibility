function font(e) {

    var text = $(".txt");
    var font = parseInt(text.css('font-size'));

    var body = $("body");
    const defaultSize = parseInt(body.css('font-size'));


    if (e == 'i') { // i for increase
        font++;
    }
    if (e == 'd'){ // d for decrease
        font--;
    }
    if (e == 'n'){ // n for normal
        font = defaultSize;
    }

    text.css("fontSize", font);

}