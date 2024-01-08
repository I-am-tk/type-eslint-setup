import add from './add';

add(1, 2);
add(var1, var2);
var2 = 4; // can't be modified

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
