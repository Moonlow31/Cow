const information = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${information.name} is on ${information.campus}`,
    e : "--",
    T : "o "
}));