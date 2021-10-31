const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => f(composed), arg);

const printUpperCase = compose((a) => a.toUpperCase(), console.log);

printUpperCase("hello!");
