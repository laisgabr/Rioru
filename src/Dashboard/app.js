'use strict';
const _0x378a = ["view engine", "path", "static", "[SITE] O site foi ligado com sucesso.", 
"renderFile", "log", "passport", "./routes/auth.js", "./utils", "session", "set", "join", "initialize", "initializeAuth", "views", "use", "ejs", "engine", "listen", "./routes/index.js", "config", "body-parser"];
(function(data, i) {
  const write = function(isLE) {
    for (; --isLE;) {
      data["push"](data["shift"]());
    }
  };
  write(++i);
})(_0x378a, 139);
const _0x2129 = function(url, whensCollection) {
  /** @type {number} */
  url = url - 0;
  let _0x2129ef = _0x378a[url];
  return _0x2129ef;
};
const _0x573856 = _0x2129;
const express = require("express");
const bodyParser = require(_0x573856("0xe"));
const ejs = require(_0x573856("0x9"));
const path = require(_0x573856("0x10"));
require("dotenv")[_0x573856("0xd")]();
const system = require(_0x573856("0x1"));
const passport = require(_0x573856("0x15"));
const app = express();
system[_0x573856("0x6")](app), app[_0x573856("0x8")](bodyParser["json"]()), app["use"](bodyParser["urlencoded"]({
  "extended" : !![]
})), app[_0x573856("0xa")]("html", ejs[_0x573856("0x13")]), app[_0x573856("0x8")]("/", express[_0x573856("0x11")](_0x573856("0x11"))), app[_0x573856("0x3")](_0x573856("0xf"), _0x573856("0x9")), app[_0x573856("0x3")](_0x573856("0x7"), path[_0x573856("0x4")](__dirname, _0x573856("0x7"))), app[_0x573856("0x8")](passport[_0x573856("0x5")]()), app[_0x573856("0x8")](passport[_0x573856("0x2")]()), app["use"]("/", require(_0x573856("0xc"))), app[_0x573856("0x8")]("/auth", require(_0x573856("0x0"))), app[_0x573856("0xb")](3E3, 
(body) => {
  const getConsoleMethod = _0x573856;
  if (body) {
    return console[getConsoleMethod("0x14")](body);
  }
  console[getConsoleMethod("0x14")](getConsoleMethod("0x12"));
});