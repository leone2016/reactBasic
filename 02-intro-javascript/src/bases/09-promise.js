import getHeroeById from '../bases/08-impo-expo'
/* PROMESAS */
/* 
rec ibe un callback
 */
/* const promesas = new Promise( (resolve, reject) => {

    setTimeout(() => { 
         
        const heroe = getHeroeById(2);
        
        resolve(heroe);
        reject('No se pudo encontrar el Heroe');

    }, 2000);
});

promesas.then((res) => {
    console.log('2 segundos despues',res);
})
.catch(err => console.warn(err)); */

const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {

        setTimeout(() => {

            const heroe = getHeroeById(id);

            if (heroe === undefined) {
                reject('No se pudo encontrar el Heroe');
            }
            resolve(heroe);

        }, 2000);
    });

    return promesa;
}

// it's important to comment this, because this will be the exported promise stay done
/* getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn ); */

export {
    getHeroeByIdAsync as default,
}

