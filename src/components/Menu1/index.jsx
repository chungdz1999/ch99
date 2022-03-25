import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider'


Menu1.propTypes = {

};

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    border: '1px solid Gray',
};

function Menu1(props) {
    return (
        <div>
            <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="Kem New Bie" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Kem Normal" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Kem hết hàng" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Kem hết hạng" />
                </ListItem>
            </List>
        </div>
    );
}

export default Menu1;