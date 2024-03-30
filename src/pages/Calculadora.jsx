import React, { useState, useEffect } from 'react';

function Calculadora() {
  // Definir estados para las variables que van a cambiar
  const [cantidadHojas, setCantidadHojas] = useState(0);
  const [tipoColor, setTipoColor] = useState('sin_color');
  const [tipoPresentacion, setTipoPresentacion] = useState('suelto');
  const [valorFinal, setValorFinal] = useState(0);

  // Definir valores constantes para los diferentes tipos de presentación y color
  const precioHoja = 40;
  const precioColor = 30;
  const precioPresentacion = {
    'anillado': 3500,
    'encuadernado': 3500,
    'suelto': 0
  };

  // Función para calcular el precio final
  const calcularPrecio = () => {
    // Calcular el precio basado en el tipo de color seleccionado
    const precioTipoColor = tipoColor === 'sin_color' ? 0 : precioColor;

    // Calcular el precio basado en el tipo de presentación seleccionado
    const precioTipoPresentacion = precioPresentacion[tipoPresentacion];

    // Calcular el precio final sumando los precios de color, presentación y cantidad de hojas
    const precioFinal = cantidadHojas * (precioHoja + precioTipoColor) + precioTipoPresentacion;

    // Actualizar el estado del valor final
    setValorFinal(precioFinal);
  };

  // Efecto para calcular el precio final cuando cambian los valores
  useEffect(() => {
    calcularPrecio();
  }, [cantidadHojas, tipoColor, tipoPresentacion]);

  // Renderizar el componente
  return (
    <div>
      <label>
        Cantidad de hojas:
        <input type="number" value={cantidadHojas} onChange={(e) => setCantidadHojas(parseInt(e.target.value))} />
      </label>

      <br />

      <label>
        Tipo de color:
        <select value={tipoColor} onChange={(e) => setTipoColor(e.target.value)}>
          <option value="sin_color">Sin color</option>
          <option value="con_color">Con color</option>
        </select>
      </label>

      <br />

      <label>
        Tipo de presentación:
        <select value={tipoPresentacion} onChange={(e) => setTipoPresentacion(e.target.value)}>
          <option value="anillado">Anillado</option>
          <option value="encuadernado">Encuadernado</option>
          <option value="suelto">Suelto</option>
        </select>
      </label>

      <br />

      <div>Valor Final: {valorFinal}</div>
    </div>
  );
}


export default Calculadora;
