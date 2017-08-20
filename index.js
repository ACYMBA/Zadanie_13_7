var fs = require('fs');
var colors = require('colors');

/*fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.appendFile('./tekst.txt', '\nA Dodanie kolejnej lini tekstu', function(err) {
      if (err) throw err; 
      console.log('Zapisano!'.blue);
      fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
        console.log('Dane po zapisie'.blue)
        console.log(data);
        });
    });
});*/



fs.readdir('../zadanie_13_7', 'utf-8', function(err, data) {
    console.log(data);
    fs.writeFile('./tekst.txt', data, function(err) {
    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
    console.log('Zapisano!');
    });
});