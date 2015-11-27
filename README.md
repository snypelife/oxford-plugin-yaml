# Oxford YAML Plugin
[![Build Status](https://travis-ci.org/snypelife/oxford-plugin-yaml.svg)](https://travis-ci.org/snypelife/oxford-plugin-yaml)
[![Coverage Status](https://coveralls.io/repos/snypelife/oxford-plugin-yaml/badge.svg?branch=master&service=github)](https://coveralls.io/github/snypelife/oxford-plugin-yaml?branch=master)

This simple Oxford plugin exposes a static method off of the Oxford library function that can be used to import yaml files directly into an Oxford string library.

All you have to do is register the plugin with the Oxford instance by calling the `.registerPlugin` method, and providing the plugin's name (i.e. "yaml").

Oxford's plugin system is built on a naming convention for modules ("oxford-plugin-%plugin name goes here%"), and will automatically pull in the plugin.

## Example
```yaml
# ./lib/text.yml
---
message: Hello World!
messageTo: Hello %s!
```
```js
// example.js

var path = require('path');
var oxford = require('oxford');
oxford.registerPlugin('yaml');

var ox = oxford.importYAML(path.join(__dirname, './lib/text.yml'));

ox.get('message') // Hello World!
ox.get('messageTo', 'Homer') // Hello Homer!
```

## API
##### oxford.importYAML(*string*)
Basic usage, just pass a single string and the plugin will pull in a single YAML file.

##### oxford.importYAML(*array*)
The plugin also has the ability to pull in multiple YAML files when provided an array of filepaths. Merge order precedence follows that of Oxford, where data is merged deeply from right to left.

