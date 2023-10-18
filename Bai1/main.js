function calculatePrimeSum() {
  const numberA = parseInt(document.getElementById("numberA").value);
  const numberB = parseInt(document.getElementById("numberB").value);
  let sum = 0;

  let array = [];
  for (let i = numberA; i <= numberB; i++) {
    if (isPrime(i)) {
      sum += i;
      array.push(i);
    }
  }

  document.getElementById(
    "result1"
  ).textContent = `Số nguyên tố trong khoảng từ ${numberA} đến ${numberB} là: ${array}`;

  document.getElementById(
    "result2"
  ).textContent = `Tổng số nguyên tố trong khoảng từ ${numberA} đến ${numberB} là: ${sum}`;
}

function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
  return true;
}
