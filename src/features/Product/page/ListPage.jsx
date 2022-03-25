// import PropTypes from 'prop-types';
import { Box, Container, Grid, Pagination, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductLoadingList from '../components/ProductLoadingList';

ListPage.propTypes = {};


function ListPage(props) {

    const [loading , setLoading] = useState(true);
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        _limit: 8,
        _totalRows: 8,
        _page: 1
    });

    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 8,
    })

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination)
                console.log({ data, pagination });
            } catch (error) {
                console.log('falid ', error);
            }
            setLoading(false);
        })();
    }, [filters]);

    const handlePageChange = (e, page) => {
        setFilters((prev) => ({
            ...prev,
            _page: page
        }));
    };

    const handleFilterChange = (newFilters) => {
        setFilters((prev) => ({
            ...prev,    
            ...newFilters,
        }));
    };

    return (
        <Box sx={{
            marginTop: 1,
        }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={2} >
                        <Paper >
                            <ProductFilters filters={filters} onChange={handleFilterChange}  />
                        </Paper>
                    </Grid>
                    <Grid item xs={10} >
                        <Paper> 
                {loading ? <ProductLoadingList /> :  <ProductList data={productList} /> }
                         <Box sx={{
                             display: 'flex',
                             flexFlow: 'row nowrap',
                             justifyContent: 'center',
                             marginTop: '10px',
                             paddingBottom: '10px'
                         }}>
                         <Pagination
                                count={Math.ceil(pagination._totalRows / pagination._limit)}
                                page={pagination._page}
                                color='primary' 
                                onChange={handlePageChange}
                                >
                            </Pagination>
                         </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
}

export default ListPage;