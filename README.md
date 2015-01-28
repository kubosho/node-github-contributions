node-github-contributions
=========================

**Not working ! (because GitHub specification change)**

GitHub Contributions API implementation for Node.js (unofficial).

[![Build Status](https://travis-ci.org/kubosho/node-github-contributions.svg?branch=master)](https://travis-ci.org/kubosho/node-github-contributions)
[![NPM version](https://badge.fury.io/js/github-contributions.svg)](http://badge.fury.io/js/github-contributions)
[![Dependency Status](https://gemnasium.com/kubosho/node-github-contributions.svg)](https://gemnasium.com/kubosho/node-github-contributions)

## Install

Install with npm:

```
npm install github-contributions
```

## Sample

```
var contributions = require('./github-contributions');
contributions.fetch(':github-username', function(res, statusCode) {
    console.log(res); // GitHub Contributions data(JSON).
    console.log(statusCode); // Response HTTP status code.
});
```

## License

[MIT License](https://github.com/kubosho/node-github-contributions/blob/master/LICENSE)
