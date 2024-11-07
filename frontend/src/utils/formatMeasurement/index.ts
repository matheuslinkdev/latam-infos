export default function formatMeasurement(value: number, measurement: string){
   const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

    return `${formattedValue} ${measurement}`;
}