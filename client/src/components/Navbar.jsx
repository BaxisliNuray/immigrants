import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container } from '@mui/material';
import { Link } from "react-router-dom";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: 'white', boxShadow: 'none', position: 'fixed',zIndex:'100' }} position="static">
                    <Container>
                        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }} >
                            <h4 style={{ textDecoration: 'none', color: "black",fontWeight:'500' }} >We believe we helps people <br />
                                for happier lives</h4>
                            <Link style={{
                                color: 'black',
                                fontFamily: 'Impact',
                                fontSize: '35px',
                                textDecoration: 'none'
                            }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <img src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="" />
                            </Link>

                            <Button style={{ textDecoration: 'none', }} to='/add'>+880 123 12 658 439 <LocalPhoneIcon style={{border:'1px solid #f6214b',fontSize:'70px',padding:"10px",marginLeft:'10px',background:'#f6214b',color:'white'}} /></Button>
                        </Toolbar>
                        <Toolbar  style={{ display: 'flex', justifyContent: 'center' }} >
                        <Button><Link style={{textDecoration:'none',color:'#f6214b'}} to='/home'>Home </Link></Button>
                        <Button><Link style={{textDecoration:'none',color:'black'}} to='/add'>Add </Link></Button>

                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

        </>
    )
}

export default Navbar