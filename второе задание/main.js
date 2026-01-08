
let input = prompt("Введите число:");


let number = parseInt(input);


if (isNaN(number)) {
  console.log("Это не число!");
} else {
  let sum = 0;


  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i; 
    }
  }

  
  console.log("Сумма всех чётных чисел до", number, "равна", sum);
}
