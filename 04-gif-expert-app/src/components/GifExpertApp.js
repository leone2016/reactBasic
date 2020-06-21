import React, { useState } from 'react'
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = props => {
    const initialState = ['One Punch'];
    const [categories, setcategories] = useState(initialState);

    const handleAdd = (category) => {
        /* setcategories( ['HunterHunter', ...categories]); */
    }
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map((cat) => (
                      <GifGrid
                      key={cat}
                      category={cat}
                      />
                    )

                    )
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
