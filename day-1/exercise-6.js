export const my_length_array = (arr) => {
  if (!arr) return 0;
  let cmp = 1;
  while (arr[cmp]) {
    cmp++;
  }
  return cmp;
};
