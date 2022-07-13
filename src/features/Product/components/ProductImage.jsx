import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';


ProductImage.propTypes = {
    product: PropTypes.object,
};

function ProductImage({ product }) {

    return (
        <Box>
            <img
                src={product.thumbnailUrl}
                alt={product.name}
                width="100%"
            />
        </Box>
    );
}

export default ProductImage;