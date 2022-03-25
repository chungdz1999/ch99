import React from 'react';
// import PropTypes from 'prop-types';
import ProductImg from './ProductImg';
import Image from './Image';

HiHi.propTypes = {
    
};

function HiHi(props) {

    const productList = [
        {
            id: 1,
            name: 'kem dâu',
            price: '50.000 đ',
            image: 'http://hinhanhdephd.com/wp-content/uploads/2016/01/nhung-hinh-anh-dep-cua-nhung-ly-kem-mat-lanh-11.jpg'
        },
    
        {
            id: 2,
            name: 'kem vani',
            price: '60.000 đ',
            image: 'https://hinh365.com/wp-content/uploads/2020/06/218-881-tam-anh-ve-kem-oc-que-kem-ly-dep-ngat-ngay-hinh-anh-chat-luong-cao-tren-123rf-com-37.jpg'
        },
    
        {
            id: 3,
            name: 'kem sữa chua',
            price: '70.000 đ',
            image: 'https://kemkepsingapore.com/wp-content/uploads/2021/12/kem-ngon.jpg'
        },

        {
            id: 4,
            name: 'kem SoCola',
            price: '70.000 đ',
            image: 'http://giadinh.mediacdn.vn/2017/photo-2-1491957980364.jpg'
        },

        {
            id: 5,
            name: 'kem khoai môn',
            price: '70.000 đ',
            image: 'http://hinhanhdephd.com/wp-content/uploads/2016/01/nhung-hinh-anh-dep-cua-nhung-ly-kem-mat-lanh-4.jpg'
        },

    ]
    // 'http://mauweb.monamedia.net/iceCream/wp-content/uploads/2017/11/cute-lover.jpg'
    return (
        <div>
            <Image />
            <ProductImg product={productList} />
        </div>
    );
}

export default HiHi;