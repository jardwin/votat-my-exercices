export const my_sum = (a, b) => {
  if (a == undefined || b == undefined) {
    return 0;
  }

  if (typeof a != "number" || typeof b != "number") {
    return 0;
  }
  return a + b;
};
