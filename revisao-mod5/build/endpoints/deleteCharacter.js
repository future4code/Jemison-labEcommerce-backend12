"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
function deleteCharacter(req, res) {
    const { id } = req.params;
    const index = data_1.characters.findIndex(character => character.id === Number(id));
    data_1.characters.splice(index, 1);
    res.status(200).end();
}
exports.default = deleteCharacter;
