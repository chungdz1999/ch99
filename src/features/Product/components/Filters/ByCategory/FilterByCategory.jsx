import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import categoryApi from '../../../../../api/categoryApi'
import { Box, Typography } from '@mui/material';
import './styles.scss';
FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll()
                console.log({ list });
                setCategoryList(list.map(x => ({
                    id: x.id,
                    name: x.name,
                })));
            } catch (error) {
                console.log('faild category', error);
            }
        })();
    }, []);

const handleClick = (category) => {
    if (onChange) {
        onChange(category.id);
    }
}

    return (
        <Box className='root'>
            <Typography variant='subtitle2' fontWeight='bold'>Danh mục sản phẩm</Typography>
      
            <ul className='category'>
                {categoryList.map(category =>(
                <li key={category.id}
                    onClick={() => handleClick(category)}
                >
                   <Typography variant='body2'> {category.name} </Typography>
                </li>
                ))}
            </ul>
       
        </Box>
    );
}

export default FilterByCategory;