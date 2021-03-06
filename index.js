﻿var fs = require('fs');
var colors = require('colors');

function fromFolderToFile(path, destination) {
    fs.readdir(path, 'utf-8', function(err, files) {
        if (err) throw err;
        console.log('Odczyt: '.blue, files);
        fs.writeFile(destination, files, function(err) {
            if (err) throw err;
            console.log('Plik został zapisany!'.blue, '\nTreść pliku: '.yellow, files);
        });
    });
};
fromFolderToFile('./folder', 'plik.txt');