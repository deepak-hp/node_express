// CommonJs, every file is module (by default)
// Modules - encapsulated code (only share minimum)

const names = require("./names");
const sayHi = require("./utils");

const data = require("./alternativeflow");
require("./mindGranade");


sayHi("susan");
sayHi(names.john);
sayHi(names.peter);