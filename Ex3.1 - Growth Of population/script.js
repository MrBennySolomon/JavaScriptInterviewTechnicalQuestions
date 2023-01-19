const nb_year = (p0, percent, aug, p) => {

  let calcPerYear = p0 + p0 * (percent / 100) + aug;
  let i;

  for (i = 1; calcPerYear <= p; i++) {
    
    calcPerYear = calcPerYear + calcPerYear * (percent / 100) + aug;
  }

  return i;
}