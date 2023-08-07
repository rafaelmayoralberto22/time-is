"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.containerAwilix = void 0;
const awilix_1 = require("awilix");
const awilix_express_1 = require("awilix-express");
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const controller_1 = require("./share/application/injectionContainer/controller");
const register_1 = __importDefault(require("./share/application/injectionContainer/register"));
const constant_1 = require("./share/utils/constant");
const app = (0, express_1.default)();
const port = 3000;
exports.containerAwilix = (0, awilix_1.createContainer)();
app.use(express_1.default.json());
app.use((0, awilix_express_1.scopePerRequest)(exports.containerAwilix));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const swaggerDoc = (0, swagger_jsdoc_1.default)(constant_1.SWAGGER_OPTIONS);
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDoc));
(0, register_1.default)(exports.containerAwilix);
(0, controller_1.registerControllers)(app);
app.get("/", (req, res) => {
    res.send("Express Time API server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=main.js.map