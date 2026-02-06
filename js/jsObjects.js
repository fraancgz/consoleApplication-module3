const ONLY_LETTERS_REGEX = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/ // Variable global para no gastar memoria innecesariamente cada vez que se llama a la función checkInputStatus

/**
 * Genera el nombre completo formateado a partir del nombre legal y el apellido.
 * Valida que ambos campos cumplan con el formato de texto permitido.
 * @param {string} legalName - Nombre del usuario a validar.
 * @param {string} lastName - Apellido del usuario a validar.
 * @returns {string} Nombre completo capitalizado o el primer mensaje de error encontrado.
 */
function getFullName(legalName, lastName) {

    const { status: statusName, message: messageName, newValue: cleanName } = checkInputStatus(legalName, "Nombre")
    const { status: statusLastName, message: messageLastName, newValue: cleanLastName } = checkInputStatus(lastName, "Apellido")

    if (!statusName)
        return messageName
    if (!statusLastName)
        return messageLastName
    return `${cleanName} ${cleanLastName}`
}

/**
 * Gestiona el cambio de nombre legal del usuario.
 * Verifica la mayoría de edad y valida que el nuevo nombre cumpla con los estándares de seguridad.
 * @param {number} userAge - Edad actual del usuario (Requerido: >= 18).
 * @param {string} newName - El nuevo nombre propuesto.
 * @returns {string} Nuevo nombre capitalizado o mensaje de error según la validación fallida.
 * * @see checkInputStatus - Función encargada de la validación de formato y limpieza
 */
function changeName(userAge = 0, newName = "") {

    if (typeof userAge !== "number") {
        return "Edad debe contener solo numeros"
    }

    if (userAge < 18) {
        return "Para modificar tu nombre debes ser mayor de edad"
    }

    const { status, message, newValue } = checkInputStatus(newName, "Nuevo Nombre")

    if (!status) {
        return message
    }

    return newValue
}


/**
 * Valida un string de entrada contra reglas de negocio: presencia, formato (solo letras) y longitud.
 * @param {string} inputValue - El texto a evaluar.
 * @param {string} type - Etiqueta del campo para personalizar el mensaje de error (ej. "Nombre").
 * @returns {Object} Resultado de la validación { status: boolean, message: string, newValue: string|undefined }.
 */
function checkInputStatus(inputValue, type = "campo") {

    if (!inputValue) {
        return {
            status: false,
            message: `El ${type} no puede estar vacío.`
        }
    }

    const cleanValue = inputValue.toLowerCase().trim()

    if (!ONLY_LETTERS_REGEX.test(cleanValue)) {
        return {
            status: false,
            message: `En el ${type} solo se permiten letras. Por favor elimina números o caracteres especiales`
        }
    }

    if (cleanValue.length < 2) {

        return {
            status: false,
            message: `El ${type} debe tener al menos 2 letras.`
        }
    }

    return {
        status: true,
        message: "válido",
        newValue: capitalize(cleanValue)
    }

}

/**
 * Transforma un string a formato de nombre propio (Primera letra mayúscula).
 * @param {string} str - Texto en minúsculas.
 * @returns {string} Texto formateado.
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}


/**
 * Procesa y valida la información completa de un objeto usuario.
 * Itera sobre las propiedades de texto para limpiarlas y verifica que no existan errores
 * de formato antes de generar el reporte.
 * @param {Object} user - Objeto con la información del usuario (legalName, lastName, age, newName).
 * @returns {string} Reporte detallado con los datos formateados o un mensaje de error si la validación falla.
 * @see checkInputStatus - Utilizado para validar y capitalizar cada propiedad de texto.
 */
const getInfo = function(user) {
    if (!user) {
        return "El usuario aun no está definido"
    }

    let cleanUser = {...user}
    let errorCounter = 0

    Object.entries(user).forEach(([key, value]) => {
        if (typeof value === "string" && key !== "getInfo") {
            const result = checkInputStatus(value, key)
            if (result.status === false)
                errorCounter++
            else
                cleanUser[key] = result.newValue
        }
    })

    if (errorCounter != 0) {
        return "Falta ingresar datos del usuario"
    }

    const {legalName, lastName, age, newName} = cleanUser
    return `
        Información de ${legalName} ${lastName}
        Actualmente tiene ${age} años y modificó su nombre a ${newName}
    `.trim()   
}

// ----------------------------------------------------o---------------------------------------------------

/* TEST DATA
 * Variables para validar el flujo de registro y modificación de usuario
 */
const persona1 = {
    legalName: "FrAnciSco", // Nombre inicial con mayúsculas mixtas (Prueba capitalize)
    lastName: "",           // Apellido inicial vacío para validar existencia
    age: 17,               // Edad inicial para validar tipo de dato numérico
    newName: "F",           // Nuevo nombre para validar 2 o más caracteres
    getInfo     // Muestra los datos del usuario solo cuando todas las propiedades son válidas
}

console.log("Nombre Completo: "+getFullName(persona1.legalName, persona1.lastName))
console.log("Cambio de Nombre: "+changeName(persona1.age, persona1.newName)) 
console.log("Full info: "+persona1.getInfo(persona1))