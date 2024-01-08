/* eslint eqeqeq: "off", curly: "error" */
import add from './add';

add(1, 2);
add(var1, var2);
var2 = 4; // can't be modified

// eslint-disable-next-line
function delay(time = 1000) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        res();
      } catch (e) {
        rej(e);
      }
    }, time);
  });
}

delay();
