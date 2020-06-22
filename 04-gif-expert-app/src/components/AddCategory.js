import React, { useState } from 'react'
import PropTypes from 'prop-types';

 const AddCategory = (props) => {
    const { setcategories } = props;
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log('handleInputChange Called');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setcategories(cat=> [ inputValue, ...cat]);
            setInputValue('');
        }
       
    }
    return (
        <form onSubmit={handleSubmit}>
            <p> {inputValue} </p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.prototype = {
    setcategories : PropTypes.func.isRequired
}


export default AddCategory;
