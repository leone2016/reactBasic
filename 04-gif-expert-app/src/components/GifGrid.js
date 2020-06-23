import React from 'react';
import {GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
/* import { getGifs } from '../helpers/getGifs'; */


export const GifGrid = ({ category }) => {

    const {data: images,  loading } = useFetchGifs(category);

   /*  const [images, setImages] = useState([]) */

  

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">

            {loading && <h4>C A R G A N D O . . .</h4>}
                <ol>
                   {
                        images.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
                </ol>
           
            </div>
        </>
    )
}
