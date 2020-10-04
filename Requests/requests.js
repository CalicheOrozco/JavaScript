const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const lukeURL=`${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }
const onResponse = function (luke) {
    console.log(`Hola soy, ${luke.name}`);
    
}
    


$.get(lukeURL, opts, onResponse )
