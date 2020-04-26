import * as ta from 'type-assertions';
import isPromise from '../';

declare const x: number | Promise<string>;
if (isPromise(x)) {
  ta.assert<ta.Equal<typeof x, Promise<string>>>();
} else {
  ta.assert<ta.Equal<typeof x, number>>();
}