export default function formatInflation(value: number){
    const formattedInflation = value.toLocaleString("pt-BR");

    return `${formattedInflation}%`
}