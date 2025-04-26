((a, b) => {
  return (function (x) {
    return (function (y) {
      return x + y;
    })(b);
  })(a);
})(3, 5);
