import { my_display_alpha } from "../index.js";
export const my_display_alpha_reverse = () => {
  let result = "";
  for (let i = 25; i >= 0; i--) {
    result += my_display_alpha()[i];
  }
  return result;
};
