import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export default function Slide() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Box sx={{
      textAlign: "center",
    }} >
      <NavLink to='/' style={{
        textDecoration: 'none',
        marginRight: 30 ,
      }}>
        <Button color="inherit">Trang chủ</Button>
      </NavLink>

      <NavLink to='/product/listpage' style={{
        textDecoration: 'none',
        marginRight: 30 ,
      }}>
        <Button color="inherit">Sản phẩm</Button>
      </NavLink>

      <NavLink to='/product/listpage' style={{
        textDecoration: 'none',
      }}>
        <Button color="inherit">liên hệ</Button>
      </NavLink>
    </Box >
  );
}