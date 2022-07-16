// BMI Calculator as Functions
// copy from exercise from repo pb-conditionals-bmi-calculator-OliveiraDCI in a new development branch 'bmiFunctions'

const calculateBMI = (name, weight, height) => weight * height.toFixed(2);

const whoIsBiggest = function (
  name1,
  weight1,
  height1,
  name2,
  weight2,
  height2
) {
  let markBMI = calculateBMI("Mark", 73.5, 1.6);
  let johnBMI = calculateBMI("John", 78, 1.65);
  if (markBMI == johnBMI) return "They have the same BMI.";
  let biggest = markBMI > johnBMI ? name1 : name2;
  return `${biggest} is the biggest.`;
};

console.log(whoIsBiggest("Mark", 73.5, 1.6, "John", 78, 1.65));
