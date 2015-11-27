'use strict';

var fs = require('fs');
var path = require('path');
var read = fs.readFileSync;
var yaml = require('js-yaml');
var load = yaml.safeLoad;

var InvalidFormatError = new Error('invalid format for parameter `url`.');

module.exports = {
  hook: 'static',
  name: 'importYAML',
  method: function (url) {
    try {
      switch (typeof url) {
        case 'string':
          return this(load(read(url)));
        case 'object':
          if (Array.isArray(url)) {
            var hash = url.map(function (u) {
              return load(read(u));
            });
            return this(hash);
          }
          throw InvalidFormatError;
        default:
          throw InvalidFormatError;
      }
    } catch (err) {
      var errorWrapper = new Error('failed to import yaml file.');
      errorWrapper.inner = err;
      throw errorWrapper;
    }
  }
};
