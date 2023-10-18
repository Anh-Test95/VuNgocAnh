function numberOneTriangle() {
  const number = parseInt(document.getElementById("numberInput").value);

  if (number < 1 || number > 10) {
    alert("Vui lòng nhập một số nguyên trong khoảng từ 1 đến 10.");
    return;
  }

  let triangle = "";
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      triangle += "* ";
    }
    triangle += "<br>";
  }

  document.getElementById("triangleOutput").innerHTML = triangle;
}
