/**
 * Copyright 2013-present, Novivia, Inc.
 * All rights reserved.
 */

import nconf from "nconf";

nconf.overrides({
  "owner": "Novivia",
});

nconf.use("memory", {logicalSeparator: "."});

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
