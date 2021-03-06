"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("../Controller/NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedListCollection_1 = require("./LinkedListCollection");
function Collections() {
    var numbers = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
    var characters = new CharactersCollection_1.CharactersCollection('Bacon');
    var linkedList = new LinkedListCollection_1.LinkedListCollection();
    linkedList.add(500);
    linkedList.add(-10);
    linkedList.add(-3);
    linkedList.add(4);
    numbers.sort();
    numbers.print();
    characters.sort();
    characters.print();
    linkedList.sort();
    linkedList.print();
}
exports.default = Collections;
