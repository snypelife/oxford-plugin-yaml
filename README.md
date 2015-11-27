#Oxford YAML Plugin
This simple Oxford plugin exposes a static method off of the Oxford library function that can be used to import yaml files directly into an Oxford string library.

All you have to do is register the plugin with the Oxford instance by calling the `.registerPlugin` method, and providing the plugin's name (i.e. "yaml").

Oxford's plugin system is built on a naming convention for modules ("oxford-plugin-%plugin name goes here%"), and will automatically pull in the plugin.

##Example
```yaml
# ./lib/text.yml
---
message: Hello World!
messageTo: Hello %s!
```
```js
// example.js

var oxford = require('oxford');
oxford.registerPlugin('yaml');

var ox = oxford.importYAML('./lib/text.yml');

ox.get('message') // Hello World!
ox.get('messageTo', 'Homer') // Hello Homer!
```

##API
#####oxford.importYAML(*string*)
Basic usage, just pass a single string and the plugin will pull in a single YAML file.

#####oxford.importYAML(*array*)
The plugin also has the ability to pull in multiple YAML files when provided an array of filepaths. Merge order precedence follows that of Oxford, where data is merged deeply from right to left.

