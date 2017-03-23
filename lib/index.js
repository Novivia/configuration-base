/**
 * Copyright 2013-present, Novivia, Inc.
 * All rights reserved.
 */

import nconf from "nconf";

//
// 1. any overrides
//
nconf.overrides({
  "owner": "Novivia",
});

//
// 2. `process.env`
// 3. `process.argv`
//
nconf.env().argv();

//
// 5. Any default values
//
nconf.defaults({
  "system": "Novivia",
});

export function add(...args) {
  return nconf.add(...args);
}

export function get(...args) {
  return nconf.get(...args);
}

export function remove(...args) {
  return nconf.remove(...args);
}

export function set(...args) {
  return nconf.set(...args);
}
