import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/ByCategory/FilterByCategory'
ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters({ filters , onChange }) {
    const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return;

        const newFilters = {
            ...filters,
            categoryId: newCategoryId,
        };
        onChange(newFilters);
    };

    return (
      <Box style={{
        marginTop: '15px'
      }}>
          <FilterByCategory onChange={handleCategoryChange} />
      </Box>
    );
}

export default ProductFilters;