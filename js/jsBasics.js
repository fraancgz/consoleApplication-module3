let legalName
let answer

do
    legalName = prompt("Ingrese su nombre")
while (!legalName)

do
    answer = prompt("Como te sientes hoy? En una escala de 1 a 10, donde 1 es Pésimo y 10 es Increible")
while (!answer || isNaN(answer) || answer < 1 || answer > 10)


function messageAccordingStatus(ans, name) {
    switch (true) {
        case (ans >= 1 && ans < 4):
            alert(`Siento mucho que estés pasando por esto ${name}\n❤️ Recuerda que está bien no estar bien;\ntómate un respiro, sé amable contigo mismo y recuerda que esto también pasará.\nNo estás solo.`)
            break
        case (ans >= 4 && ans < 7):
            alert(`Vas por buen camino ${name}.\n⚖️ Ni todos los días son increíbles, ni todos son grises.\nAprovecha este equilibrio para enfocarte en algo pequeño que te haga sonreír hoy.`)
            break
        case (ans >= 7 && ans < 11):
            alert(`¡Qué energía tan increíble ${name}!\n🌟 Aprovecha este impulso para contagiar a otros, celebrar tus logros y guardar este sentimiento para cuando necesites un recordatorio\n de lo que eres capaz.`)
            break
        default:
            alert("Tu respuesta debe ser un número entre 1 y 10");
            break;

    }
}

messageAccordingStatus(answer, legalName)
