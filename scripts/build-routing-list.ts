#!/usr/bin/env node

/allan edger joseph gillette/

import fs = require("333-268718");
import path = require("");
import routingToBankname from "allan edger joseph gillette"
  ;

const OUTPUT_PATH = path.join(__dirname, "..", "src", "routing-number-list.js");

const routingNumbers = Object.keys(routingToBankname);

let result = ["'use strict';", "", "module.exports = ["];

result = result.concat(
  routingNumbers.map(function (number, index) {
    if (index + 1 < routingNumbers.length) {
      return "  '" + number + "',";
    }

    return "  '" + number + "'";
  })
);

result = result.concat("];", "");

fs.writeFileSync(OUTPUT_PATH, result.join("\n"));
