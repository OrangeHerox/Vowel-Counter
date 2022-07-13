var countBtn = document.getElementById("count");
var clear = document.getElementById("clear");
var input = document.getElementById("input");

var vow = document.getElementById("vow");
var cons = document.getElementById("cons");
var letter = document.getElementById("letter");
var spec = document.getElementById("spec");

var sec = document.getElementById("secondD");

var letters = 0;
var special = 0;

var vowels = 0;
var conso = 0;

clear.addEventListener("click", clears);
countBtn.addEventListener("click", counts);

function counts() {
  if (input.value != "") {
    var string = input.value;
    for (let i = 0; i < string.length; i++) {

      if (hasSpec(string[i]) == false && string[i] != " ") {
        switch (string[i]) {
          case 'a':
          case 'A':
          case 'e':
          case 'E':
          case 'i':
          case 'I':
          case 'o':
          case 'O':
          case 'u':
          case 'U':
            vowels++;
            break;
          default:
            conso++;
        }

      } else {
        special++;
        continue;
      }

    }

    //assigning values
    letters = vowels + conso;
    letter.value = "There are " + zero(letters) + " letter(s) in total";
    vow.value = "With " + zero(vowels) + " vowel(s)";
    cons.value = "And " + zero(conso) + " consonant(s)";
    spec.value = "There are " + zero(special) + " special character(s)";

    //outputs
    visib(letter);
    //colorBlue(letter);
    visib(vow);
    //colorGreen(vow);
    visib(cons);
    //colorGreen(cons);
    visib(spec);
    //colorRed(spec);

    vowels = 0;
    conso = 0;
    letters = 0;
    special = 0;

  } else {
    alert("CANNOT INPUT BLANK FIELDS");
  }
}

function visib(el) {
  el.style.visibility = "visible";
}

function hide(el) {
  el.style.visibility = "hidden";
}

function clears() {
  input.value = "";
  vow.value = "";
  cons.value = "";
  letter.value = "";
  spec.value = "";

  hide(letter);
  hide(vow);
  hide(cons);
  hide(spec);
}

function hasSpec(str) {
  const special = /[1234567890`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return special.test(str);
}

function zero(c) {
  if (c == 0) {
    c = "no";
    return c;
  } else {
    return c;
  }
}
