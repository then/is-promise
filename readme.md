<a href="http://promises-aplus.github.com/promises-spec"><img src="http://promises-aplus.github.com/promises-spec/assets/logo-small.png" align="right" /></a>
# is-promise

  Test whether an object looks like a promises-a+ promise

 [![Build Status](https://img.shields.io/travis/then/is-promise/master.svg)](https://travis-ci.org/then/is-promise)
 [![Dependency Status](https://img.shields.io/david/then/is-promise.svg)](https://david-dm.org/then/is-promise)
 [![NPM version](https://img.shields.io/npm/v/is-promise.svg)](https://www.npmjs.org/package/is-promise)

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/gg9sZwctSLxyov1sJwW6pfyS/then/is-promise'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/gg9sZwctSLxyov1sJwW6pfyS/then/is-promise.svg' />
</a>

## Installation

    $ npm install is-promise

You can also use it client side via npm.

## API

```javascript
var isPromise = require('is-promise');

isPromise({then:function () {...}});//=>true
isPromise(null);//=>false
isPromise({});//=>false
isPromise({then: true})//=>false
```

## License

  MIT
