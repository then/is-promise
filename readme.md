<a href="https://promisesaplus.com/"><img src="https://promisesaplus.com/assets/logo-small.png" align="right" /></a>

# is-promise

  Test whether an object looks like a promises-a+ promise

 [![Build Status](https://img.shields.io/circleci/build/github/then/is-promise/master?style=for-the-badge)](https://app.circleci.com/pipelines/github/then/is-promise)
 [![NPM version](https://img.shields.io/npm/v/is-promise.svg?style=for-the-badge)](https://www.npmjs.org/package/is-promise)



## Installation

    $ npm install is-promise

You can also use it client side via npm.

## API

```typescript
import isPromise from 'is-promise';

isPromise(Promise.resolve());//=>true
isPromise({then:function () {...}});//=>true
isPromise(null);//=>false
isPromise({});//=>false
isPromise({then: true})//=>false
```

## License

  MIT
