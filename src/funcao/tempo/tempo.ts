export function converteParaSegundos(tempo: string): Number{
    const [horas = 0, minutos = 0, segundo = 0] = tempo.split(':')

    const horasEmSegundos = Number(horas) * 3600
    const minutosEmSegundos = Number(minutos) * 60
    return horasEmSegundos + minutosEmSegundos + Number(segundo)
}