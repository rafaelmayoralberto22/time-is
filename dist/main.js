"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.containerAwilix = void 0;
const awilix_1 = require("awilix");
const express_1 = __importDefault(require("express"));
const awilix_express_1 = require("awilix-express");
const GetWorldTimeController_1 = __importDefault(require("./modules/worldTime/application/controllers/GetWorldTimeController"));
const register_1 = __importDefault(require("./share/application/injectionContainer/register"));
const app = (0, express_1.default)();
const port = 3000;
exports.containerAwilix = (0, awilix_1.createContainer)();
app.use((0, awilix_express_1.scopePerRequest)(exports.containerAwilix));
app.use((0, awilix_express_1.controller)(GetWorldTimeController_1.default));
(0, register_1.default)(exports.containerAwilix);
app.get("/", (req, res) => {
    res.send("Express Time API server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=main.js.map