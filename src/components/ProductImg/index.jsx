import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';
import './styles.scss';
import { Box, Container, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';

ProductImg.propTypes = {
    product: PropTypes.array.isRequired,
};

function ProductImg({ product }) {
    return (
        <Box>
               <Box sx={{
                height: 35,
                backgroundColor: '#0d6efd',
                textAlign: 'center',
            }}>
            </Box>
            <br></br>
            <Container>
                <Typography variant="h5" sx={{
                    // backgroundColor: 'primary.dark',
                }}>
                    Danh sách sản phẩm mới
                    <img style={{
                       marginLeft: 10,
                    }}
                    height='30px'
                    width='40px'
                    src='https://flamingo-dailai.com/wp-content/uploads/2019/06/new_icon.gif' 
                    alt='...' />
                </Typography>
                <br></br>

                <ul className="product-list">
                    {product.map(pro => (
                        <li key={pro.id}>
                            <Product product={pro} />
                        </li>
                    ))}
                </ul>
            </Container>


            <div className="container mt-3">
                <Typography variant="h6" color='red' >
                    Tin tức - sự kiện !!
                </Typography>
                <div style={{ backgroundColor: 'rgb(226, 243, 255)' }} className="row">
                    <div className="col-sm-4">
                        <h4>Kem mới ^^</h4>
                        <img style={{
                            height: 100,
                            width: 150,
                        }} src='https://static.hotdeal.vn/images/695/694824/500x500/146677-ngay-hoi-kem-tuoi-an-kem-thoa-thich-tai-halloween-ice-cream.jpg' alt='....' />
                        <p>Kem ốc quế sắp được ra mắt tháng 3/2022....</p>

                    </div>
                    <div className="col-sm-4">
                        <h3> Giới thiệu </h3>
                        <p> <StorefrontIcon /> <a href='https://www.hinhanhsieudep.net/hinh-anh-kem-tuoi-oc-que'>shopzada</a> chuyên về kem nhập, vệ sinh, an toàn thực phẩm được chứng nhận... </p>
                        <p> English: specializes in imported ice cream, certified hygiene, food safety...</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>Hỗ trợ</h3>
                        <p> <LocalPhoneIcon /> Liên hệ SDT: 0999123456</p>
                        <p> <LocalShippingIcon /> Giao hàng miễn phí với hóa đơn trên 200k :3:3:3 tks khách ạ....</p>
                    </div>
                </div>
            </div>

            <Box sx={{
                height: 35,
                backgroundColor: '#0d6efd',
                textAlign: 'center',
            }}>
                <Typography variant="h6" >
                    Helloooo!!!!!!! Quí khách
                </Typography>
            </Box>

        </Box>
    );
}

export default ProductImg;