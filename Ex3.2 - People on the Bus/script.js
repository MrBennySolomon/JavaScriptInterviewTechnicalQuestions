const data = 
[
{
  busStop: "start",
  inAndOut:[2, 0]
},
{
  busStop: "one",
  inAndOut:[2, 1]
},
{
  busStop: "two",
  inAndOut:[2, 1]
},
{
  busStop: "three",
  inAndOut:[2, 1]
},
{
  busStop: "four",
  inAndOut:[2, 1]
},
{
  busStop: "five",
  inAndOut:[2, 1]
},
{
  busStop: "final",
  inAndOut:[0, 1]
}
];

const checkPositive = (onTheBus, busStop) => {

  if (onTheBus - busStop >= 0) {
    return busStop;
  }else {
    throw new Error('The bus is empty');
  }
}

const busRoute = data => {

  let onTheBus = 0;

  for (const busStop of data) {
    onTheBus += busStop['inAndOut'][0];
    onTheBus -= checkPositive(onTheBus, busStop['inAndOut'][1]); 
  }
  
  return onTheBus;
}