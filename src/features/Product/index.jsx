import { Box } from '@mui/material';
import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Routes } from "react-router-dom";
import ListPage from './page/ListPage';

ProductList.propTypes = {};

function ProductList(props) {
    // const match = useRouteMatch();
    //  const match = useRoutes();
    return (
        <Box>
            <Routes>
                <Route path='/listpage' element={<ListPage />} />
                {/* {<Route path='listpage' element={<DetailPage />} />} */}
            </Routes>
        </Box>
    );
}

export default ProductList;