/**
 * Colección de 20 personajes icónicos de Harry Potter.
 */
const harryPotterCharacters = [
    { name: "Harry Potter", house: "Gryffindor", gender: "male", role: "Protagonista" },
    { name: "Hermione Granger", house: "Gryffindor", gender: "female", role: "Estudiante" },
    { name: "Ron Weasley", house: "Gryffindor", gender: "male", role: "Estudiante" },
    { name: "Albus Dumbledore", house: "Gryffindor", gender: "male", role: "Director" },
    { name: "Severus Snape", house: "Slytherin", gender: "male", role: "Profesor" },
    { name: "Lord Voldemort", house: "Slytherin", gender: "male", role: "Antagonista" },
    { name: "Draco Malfoy", house: "Slytherin", gender: "male", role: "Estudiante" },
    { name: "Luna Lovegood", house: "Ravenclaw", gender: "female", role: "Estudiante" },
    { name: "Rubeus Hagrid", house: "Gryffindor", gender: "male", role: "Guardabosques" },
    { name: "Sirius Black", house: "Gryffindor", gender: "male", role: "Padrino" },
    { name: "Minerva McGonagall", house: "Gryffindor", gender: "female", role: "Profesora" },
    { name: "Bellatrix Lestrange", house: "Slytherin", gender: "female", role: "Antagonista" },
    { name: "Neville Longbottom", house: "Gryffindor", gender: "male", role: "Estudiante" },
    { name: "Cedric Diggory", house: "Hufflepuff", gender: "male", role: "Estudiante" },
    { name: "Cho Chang", house: "Ravenclaw", gender: "female", role: "Estudiante" },
    { name: "Ginny Weasley", house: "Gryffindor", gender: "female", role: "Estudiante" },
    { name: "Remus Lupin", house: "Gryffindor", gender: "male", role: "Profesor" },
    { name: "Dobby", house: "None", gender: "male", role: "Elfo Doméstico" },
    { name: "Lucius Malfoy", house: "Slytherin", gender: "male", role: "Antagonista" },
    { name: "Dolores Umbridge", house: "Slytherin", gender: "female", role: "Profesora" }
];

// Funcion para modificar el articulo de cada actor segun su genero y rol
const changeArticleByRole = function (role, gender) {
    if (role === "Padrino" || role === "Protagonista")
        return "el"
    if (gender === "female")
        return "una"
    return "un"
}


// Objeto con las 3 propiedades definidas, para luego aplicar el filtro
const characterFilters = {
    // Filtra por la propiedad 'house'
    house: (array, filter) => array.filter(char => char.house.toLowerCase() === filter.toLowerCase()),
    // Filtra por la propiedad 'role'
    role: (array, filter) => array.filter(char => char.role.toLowerCase() === filter.toLowerCase()),
    // Filtra por la propiedad 'gender'
    gender: (array, filter) => array.filter(char => char.gender.toLowerCase() === filter.toLowerCase())
};

// Funcion para filtrar el arreglo segun tipo y filtro
function applyFilter(type, filter) {
    // Verifica si existe el filtro
    if (characterFilters[type]) {
        // Se llama a la funcion correspondiente, pasando el array y el filtro
        const resultados = characterFilters[type](harryPotterCharacters, filter);
        return resultados;
    } else {
        console.error("Tipo de filtro no válido");
        return [];
    }
}

// Variables para filtrar el arreglo segun tipo y filtro
const type = 'house'
const filter = 'gryffindor'


const charactersFiltered = applyFilter(type,filter).map((char) => {
    const {name, role, house, gender} = char
    console.log(`${name} pertenece a la casa de ${house} y es ${changeArticleByRole(role, gender)} ${role}`)
});








