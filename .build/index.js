var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_createRecord = __toModule(require("./records/createRecord"));
const express = require("express");
const app = express();
const port = 3e3;
app.use(express.json());
app.use(function(req, res, next) {
  if (req.header("Authorization") !== process.env.API_KEY) {
    res.status(403).send("Invalid API Key");
  }
  next();
});
app.post("/record/start", (req, res) => (0, import_createRecord.createRecordHandler)(req, res, "start"));
app.post("/record/stop", (req, res) => (0, import_createRecord.createRecordHandler)(req, res, "stop"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map
