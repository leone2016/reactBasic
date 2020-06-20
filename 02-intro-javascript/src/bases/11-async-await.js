/* const getImagenPromesa = ()=> new Promise( (resolve) => resolve('http://asdasdasd.com') )

getImagenPromesa().then(console.log) */

//async  = PROMISE
//async  = PROMISE
//async  = PROMISE
//async  = PROMISE
export const getImagen = async () =>{

    try {
        const apiKey ='MqtrptKjziwL1muCjL83PtXkQ8rhdV3I';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        // it's everything is Ok, return an url
        return url;
        /* img.src = url;
        document.body.append(img); */
    } catch (error) {
        return 'No existe';
    }
  

}

/* getImagen(); */