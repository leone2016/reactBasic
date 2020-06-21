import React from 'react';
/* import {GifGridItem } from './GifGridItem'; */
import { useFetchGifs } from '../hooks/useFetchGifs';
/* import { getGifs } from '../helpers/getGifs'; */


export const GifGrid = ({ category }) => {

    const { loading } = useFetchGifs();

   /*  const [images, setImages] = useState([]) */

    /**
     * SOLUCION, add in the [ category ]
     * 
     * React Hook useEffect has a missing dependency: 'getGifs'. 
     * Either include it or remove the dependency array  react-hooks/exhaustive-deps
     */
  /*   useEffect(() => {
        getGifs(category).then(setImages ); // img => setImages ( img )
    }, [ category ] );
 */
  

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">

            {
                loading ? <h4>C A R G A N D O . . .</h4>: 'Data cargada'
            }
             {/*   {  <ol>
                    {
                        images.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
                </ol> } */}
            </div>
        </>
    )
}
