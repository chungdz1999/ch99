import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail'
import ProductImage from '../components/ProductImage';

DetailPage.propTypes = {

};

function DetailPage(props) {

    let { productId } = useParams();
    // console.log(productId);

    //custom hooks
    const { product } = useProductDetail(productId);

    return (
        <Box>
            <Container>
                <Grid container>
                    <Grid item xs={2}>
                        <ProductImage product={product} />
                    </Grid>
                    <Grid item xs={10}>
                        hihi
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default DetailPage;