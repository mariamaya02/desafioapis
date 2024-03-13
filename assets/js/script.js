const pesoChilenoInput = document.querySelector("#pesoChileno");
const slctMoneda = document.querySelector(".slctMoneda");
const btnBuscar = document.querySelector("#btnbuscar");
const resultado = document.querySelector("#resultado");

btnBuscar.addEventListener("click", () => {
  renderConver();
});

async function getConversion() {
  const apiUrl = "https://mindicador.cl/api";
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  } catch (e) {
    alert(`Error: ${e.message}`);
    resultado.textContent = `Error: ${e.message}`;
  }
}

async function renderConver() {
  const monedas = await getConversion();
  const dolar = monedas.dolar.valor;
  const euro = monedas.euro.valor;

  switch (slctMoneda.value) {
    case "dolar":
      resultado.innerHTML = `${pesoChilenoInput.value / dolar}`;
      break;
    case "euro":
      resultado.innerHTML = `${pesoChilenoInput.value / euro}`;
      break;
    default:
      alert("debe seleccionar una divisa");
      break;
  }
}
renderConver();

async function getChart(moneda) {
  try {
      const res = await fetch(`https://mindicador.cl/api/${moneda}`)
      data1 = await res.json()
      console.log(data)
  } catch (e) {
      mensaje.innerHTML = e.message;
  }

}