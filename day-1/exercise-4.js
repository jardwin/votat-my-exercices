export const my_size_alpha = (str) => {
  if (!str) return 0;
  let cmp = 1;
  while (str[cmp]) {
    cmp++;
  }
  return cmp;
};
