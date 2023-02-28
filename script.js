var red = 255;
var green = 255;
var blue = 255;

function updateValues(decr, decg, decb){
    red = red - decr;
    green = green - decg;
    blue = blue - decb;
    console.log(red, green, blue)
    return red, blue, green;
}

function transition_question(curr_q, next_q){
    document.getElementById(curr_q).style.display = "None";
    document.getElementById(next_q).style.display = "block";
}

function display_color(){
    if(red <= 0){
        red = 0;
    }
    if(green <= 0){
        green = 0;
    }
    if(blue <= 0){
        blue = 0;
    }
    document.getElementById("color_strip").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function get_description(){
    if (red == green && green == blue && blue == red && red == 255 && green == 255 && blue == 255){
        document.getElementById("white_description").style.display = "block";
        document.getElementById("high_red_description").style.display = "none";
        document.getElementById("med_red_description").style.display = "none";
        document.getElementById("low_red_description").style.display = "none";
        document.getElementById("high_green_description").style.display = "none";
        document.getElementById("med_green_description").style.display = "none";
        document.getElementById("low_green_description").style.display = "none";
        document.getElementById("high_blue_description").style.display = "none";
        document.getElementById("med_blue_description").style.display = "none";
        document.getElementById("low_blue_description").style.display = "none";
        return;
    }
    if (150 <= red){
        document.getElementById("high_red_description").style.display = "block";
        document.getElementById("med_red_description").style.display = "none";
        document.getElementById("low_red_description").style.display = "none";
    }
    else if (100 <= red < 150){
        document.getElementById("high_red_description").style.display = "none";
        document.getElementById("med_red_description").style.display = "block";
        document.getElementById("low_red_description").style.display = "none";
    }
    else{
        document.getElementById("high_red_description").style.display = "none";
        document.getElementById("med_red_description").style.display = "none";
        document.getElementById("low_red_description").style.display = "block";
    }

    if (150 <= green){
        document.getElementById("high_green_description").style.display = "block";
        document.getElementById("med_green_description").style.display = "none";
        document.getElementById("low_green_description").style.display = "none";
    }
    else if (100 <= green < 150){
        document.getElementById("high_green_description").style.display = "none";
        document.getElementById("med_green_description").style.display = "block";
        document.getElementById("low_green_description").style.display = "none";
    }
    else{
        document.getElementById("high_green_description").style.display = "none";
        document.getElementById("med_green_description").style.display = "none";
        document.getElementById("low_green_description").style.display = "block";
    }

    if (150 <= blue){
        document.getElementById("high_blue_description").style.display = "block";
        document.getElementById("med_blue_description").style.display = "none";
        document.getElementById("low_blue_description").style.display = "none";
    }
    else if (100 <= blue < 150){
        document.getElementById("high_blue_description").style.display = "none";
        document.getElementById("med_blue_description").style.display = "block";
        document.getElementById("low_blue_description").style.display = "none";
    }
    else {
        document.getElementById("high_blue_description").style.display = "none";
        document.getElementById("med_blue_description").style.display = "none";
        document.getElementById("low_blue_description").style.display = "block";
    }
}

