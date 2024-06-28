function getArrayParams(...arr) {

	let min = arr[0];
  let max = arr[arr.length - 1];
  let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}

		if (arr[i] < min) {
			min = arr[i]
		}

		sum += arr[i];
	}

	const avg = +(sum / arr.length).toFixed(2);

	return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
	let summElements = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0) ;

  return summElements;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	let max = arr[0];
	let min = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return max - min;

}

function differenceEvenOddWorker(...arr) {
	if (!arr.length) return 0
	let sumEventElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEventElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEventElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEventElement = 0;
	let countEventElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEventElement += arr[i];
			countEventElement++;
		}
	}
	if (countEventElement === 0) return 0;

	return +(sumEventElement / countEventElement).toFixed(2);

}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;

}
