/*
*Exo 1
 */
if (Number.isInteger(document.getElementById("is-integer").innerHTML)){
    document.getElementById("is-integer").innerHTML = "est un nombre entier";
}
else {
    document.getElementById("is-integer").innerHTML = "n'est pas un nombre entier";
}

/*
*Exo 2
 */
if (isNaN(document.getElementById("is-nan").innerHTML)){
    document.getElementById("is-nan").innerHTML = " est NaN";
}

else {
    document.getElementById("is-nan").innerHTML = "est un nombre";
}

/*
*Exo 3
 */
let float = document.getElementById("parse-float").innerHTML.split("%")
document.getElementById("parse-float").innerHTML = float[0]*20 + "%" + float[1];

/*
*Exo 4
 */
let entier = Math.trunc(parseInt(document.getElementById("parse-int").innerHTML) / 21);
let px = document.getElementById("parse-int").innerHTML.slice(2, 4);

document.getElementById("parse-int").innerHTML = entier + px;

/*
* Exo 5
 */
let precision = document.getElementById("to-fixed").innerHTML;
precision.split("");
let nbr
let i = 0;
document.getElementById("to-fixed").innerHTML = "";
for (nbr of precision){
    if (i === 0) {
        if (nbr === ".") {
            i++;
            document.getElementById("to-fixed").innerHTML += ".";
        }
        else{
            document.getElementById("to-fixed").innerHTML += nbr;
        }
    }
    else if (i === 1){
        document.getElementById("to-fixed").innerHTML += nbr;
        i++;
    }
    else if (i === 2){
        document.getElementById("to-fixed").innerHTML += nbr;
        i++;
    }
    else {
        break;
    }
}