var input = require("fs").readFileSync("dev/stdin/file.txt", "utf8");

// It may be replaced by \n only
var lines = input.split("\r\n");

// Storing variables
var a = lines[0];
var b = lines[1];
var c = lines[2];

var animal = 
{
  vertebrado: {
    ave: {
      carnivoro: "aguia",
      onivoro: "pomba"
    },
    mamifero: {
      onivoro: "homem",
      herbivoro: "vaca"
    }
  },
  invertebrado: {
    inseto: {
      hematofago: "pulga",
      herbivoro: "lagarta"
    },
    anelideo: {
      hematofago: "sanguessuga",
      onivoro: "minhoca"
    }
  }
};

console.log(animal[a][b][c]);