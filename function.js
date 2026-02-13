function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns)
{
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5,4);
console.log(totalCost);

//functions as parameters
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
const checkA = val + 2;
const checkB = func(val);
if (checkA===checkB)
{
  return (checkB);
}
else
{return ('inconsistent results');}
}

console.log(checkConsistentOutput(addTwo,10));

