
import heroes, {owners} from '../data/heroes';
 


const getHeroeById = (id)=>{
    return heroes.find( x => x.id === id );
}


const getHeroeByOwner= (owner)=>{
    return heroes.filter( x => x.owner.toUpperCase() === owner.toUpperCase() );
}
/* console.log(getHeroeById(2));

console.log(getHeroeByOwner('marvel')); */

export {
    getHeroeById as default,
    getHeroeByOwner
}