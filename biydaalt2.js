function salary() {
    let x = parseFloat(document.getElementById('inp').value);

    document.getElementById("garalt").innerHTML = x * 1.125;
    document.getElementById("garalt_1").innerHTML = x * -0.125;
    document.getElementById("garalt_2").innerHTML = x;
    let y = parseFloat(document.getElementById('inp').value);
    document.getElementById("garalt_3").innerHTML = y * -0.115;
    document.getElementById("garalt_4").innerHTML = x * -0.0885;
    let z = parseFloat(document.getElementById('inp').value);

    if (x <= 6000000) {
        documen.getElementById("garalt_5").innerHTML =  + 20000;

    } else if (x >= 6000001, x <= 12000000) {
        document.getElementById("garalt_5").innerHTML =  + 18000;

    } else if (x >= 12000001, x <= 18000000) {
        document.getElementById("garalt_5").innerHTML =  + 16000;

    } else if (x >= 18000001, x <= 24000000) {
        document.getElementById("garalt_5").innerHTML =  + 14000;


    }
    else if (x >= 24000001, x <= 30000000) {
        document.getElementById("garalt_5").innerHTML =  + 12000;

    }
    else if (x >= 30000001, x <= 36000000) {
        document.getElementById("garalt_5").innerHTML =  + 10000;

    } else if (x >= 36000001) {
        document.getElementById("garalt_5").innerHTML =  + 0;

    }

    document.getElementById("garalt_6").innerHTML = x - 115000;
    document.getElementById("garalt_7").innerHTML = x * 0.0475;
}