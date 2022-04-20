export const my_sum = (a, b) => {
  if ((!a && a != 0) || (!b && b != 0)) {
    return 0;
  }

  if (typeof a != "number" || typeof b != "number") {
    return 0;
  }
  return a + b;
};
