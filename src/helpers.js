import { VALUE_BUTTONS } from "./constants";

export const isOperator = (record) => isNaN(parseInt(record, 10))


export const calcByOperator = (a, b, operator) => {
	console.log(a, b, operator);
switch(operator) {
    case VALUE_BUTTONS.ADD:
        return a + b;

    case VALUE_BUTTONS.SUBTRACTION:
    	return a - b;

    case VALUE_BUTTONS.MULTIPLY:
        return a * b;

    case VALUE_BUTTONS.DIVIDE:
        return a / b;

	case VALUE_BUTTONS.PLUS_MINUS:
		return a * (-1);

    case VALUE_BUTTONS.PERCENT:
        return b / 100 * a;
   }
}

export const calculate = (logs)  => {
   let result = 0
   const logsArray = logs.split(/(\+|\-|\*|\/|\%|\±)/)

   logsArray.forEach((record, index, arr) => {
      const recordIsOperator = isOperator(record)
      const isLastRecord = index === arr.length - 1

      if (recordIsOperator) {
         const leftOperand = Number(arr[index - 1])
         const rightOperand = Number(arr[index + 1])

         arr[index + 1] = String(calcByOperator(leftOperand, rightOperand, record))
      }

      if (isLastRecord) {
         result = Number(record)
      }
   })
   return result
}

