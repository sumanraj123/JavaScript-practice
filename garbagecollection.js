function call() {
  let count = 1,
    z = 5;

  return function () {
    console.log(count);
  };
}

var f1 = call();
f1();
