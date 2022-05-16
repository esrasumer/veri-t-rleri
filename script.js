let x, y, z;
x = 7, y = 7, z = 70, t = true;
document.getElementById('result').innerHTML = (x == y) + "<br>" + (x == z);
document.getElementById('result').innerHTML = t;


let langs = ["Javascript", "Angular", "React JS", "Node JS", "Vue JS", "JQuery"];
//increment : artış
//decrement : azaltma
//push : ekleme
//pop : çıkarma
//calculate: hesaplama
//sum : toplama
//sub : çıkarma
//multiply : çarpma
//divide : bölme
let i;
for (i = 0; i < langs.length; i++)
    document.getElementById('lang').innerHTML +=
    langs[i] + "<br>";
/* langs[1] + "<br>" +
 langs[2] + "<br>" +
 langs[3] + "<br>" +
 langs[4] + "<br>" +
 langs[5];*/

let person = {
    firstName: "John",
    lastName: "Brown"
};
document.getElementById('person').innerHTML = person.firstName + " " + person.lastName;

document.getElementById('typeof').innerHTML = typeof y;

//fonksiyonu çağırma yöntem-1:
Show();

function Show() {
    window.alert("Hello World");
}
document.getElementById('function').innerHTML = "";


//fonksiyonu çağırma yöntem-2: HTML'de button olutulur
function Calculate() {
    let a, b, c;
    a = 2, b = 3, c = (a + b) * 5;
    document.getElementById('result2').innerHTML = "Sonuç:" + c;
}

function getName(name, surname) {
    return name + " + surname";
}
document.write(getName("John", "Brown"));