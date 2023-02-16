function calculoTriangulo() {
  const base = document.getElementById("baseTriangulo").value;
  const altura = document.getElementById("alturaTriangulo").value;


  const lado1 = document.getElementById("lado1Triangulo").value;
  const lado2 = document.getElementById("lado2Triangulo").value;
  const lado3 = document.getElementById("lado3Triangulo").value;

  const area = (base * altura) / 2;
  const perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(lado3);

  document.getElementById("resultadoTriangulo").innerText = "El area del triangulo es: " + area + " El valor del perimetro es " + perimetro;
}

function CalcularCuadrado() {
  const lado1 = document.getElementById("lado1Areacuadrado").value;
  const lado2 = document.getElementById("lado2Areacuadrado").value;
  const lado3 = document.getElementById("lado3Areacuadrado").value;
  const lado4 = document.getElementById("lado4Areacuadrado").value;
  const area = parseInt(lado1) * parseInt(lado2);
  const perimetro =parseInt(lado1) + parseInt(lado2) + parseInt(lado3) + parseInt(lado4);

  document.getElementById("resultadoCuadrado").innerText = "El area del Cuadrado es: " + area + " El perimetro del Cuadrado es: " + perimetro;
}

function calcularRectangulo() {
  const base = document.getElementById("baserectangulo").value;
  const altura = document.getElementById("alturarectangulo").value;
  const area = parseInt(base) * parseInt(altura);
  const perimetro = parseInt(area * 2) + parseInt(base * 2);

  document.getElementById("resultadoRectangulo").innerText = "El area del rectangulo es: " + area + " El perimetro del rectangulo es: " + perimetro;
}

function calcularCirculo() {
  const Diametro = document.getElementById("DiametroCirculo").value;
  const Radio = document.getElementById("RadioCirculo").value;
  const PiCirculo = document.getElementById("PiCirculo").value;
  const area = PiCirculo * parseInt(Radio) * parseInt(Radio);
  const perimetro = parseInt(Diametro) * parseInt(PiCirculo);

  document.getElementById("resultadoCirculo").innerText = "El area del Circulo es: " + area + " El perimetro del Circulo es: " + perimetro;
}
