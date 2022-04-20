export const my_is_posi_neg = (nbr) =>
  nbr || typeof nbr == "number"
    ? nbr > 0
      ? "POSITIF"
      : nbr == 0
      ? "NEUTRAL"
      : "NEGATIF"
    : "POSITIF";
