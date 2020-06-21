import React, { useState } from 'react'
import PropTypes from 'prop-types';

 const AddCategory = (props) => {
    const { setcategories } = props;
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
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
