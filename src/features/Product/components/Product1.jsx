import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

Product1.propTypes = {
    product: PropTypes.object,
};



function Product1({ product }) {
    return (
        <Box padding={1}  >
            <Box padding={1} minHeight='210px' >
                <img
                    height='200px'
                    width='207px'
                    src={product.thumbnailUrl}
                    alt='...' />
            </Box>
            <Typography variant='body1'>  {product.name} </Typography>
            <Typography variant='body2'>
                <Box component='span' fontSize="17px" fontWeight='bold' >
                    {`${product.price}.000 đ`}
                </Box>
            </Typography>

        </Box>

      
        //     <Box component="span" fontSize="16px" fontWeight='bold' mr={1} >
        //     {/* {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productSP.salePrice)} */}
        //     {formatPrice(productSP.salePrice)}
        // </Box>

        // {productSP.promotionPercent > 0 
        // ? `${productSP.promotionPercent}%` 
        // : '' }
    );
}

export default Product1;