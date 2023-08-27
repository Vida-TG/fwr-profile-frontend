import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router';

const Menu = ()=>{
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <>                        
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/user/statement-of-account')} className={location.pathname == '/user/statement-of-account' ? 'bg-active' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                                 Statement of Account
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/user/installment-plans')} className={location.pathname == '/user/installment-plans' ? 'bg-active' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                             Installment Plans
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton  onClick={()=>navigate('/user/uploaded-docs')} className={location.pathname == '/user/uploaded-docs' ? 'bg-active' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                             Uploaded Document
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton  onClick={()=>navigate('/user/bank-cards')} className={location.pathname == '/user/bank-cards' ? 'bg-active' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                                 Bank Card
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem disablePadding>
                    <ListItemButton  onClick={()=>navigate('/user/address')} className={location.pathname == '/user/address' ? 'bg-active' : ''} >
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText>
                            <p className='my-0'>
                                 Addresses
                            </p>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>            
        </>
    )
}

export default Menu