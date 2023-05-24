import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';

function Treat() {
    return (
        <>
            <div style={{ backgroundColor: '#f9f9ff' }}>
                <Container>
                    <Typography style={{ fontSize: '35px', textAlign: 'center', fontWeight: '700' }}>How Our Customers Treat Us</Typography>
                    <p style={{ color: 'lightgrey', textAlign: 'center', marginTop: '2%', fontFamily: 'sans-serif' }}>Who are in extremely love with eco friendly system.</p>
                    <Grid container spacing={2}>

                        <Grid  style={{padding:'100px 0px'}}item lg={6} md={12} xs={12} >
                            <img src="https://preview.colorlib.com/theme/immigration/img/r1.png" alt="img nese" />
                            <h3 style={{padding:'10px 0px'}}>Fanie Rowe</h3>
                            <p style={{paddingTop:'10px',color:'lightgray'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Accusantium iure voluptates reprehenderit itaque? Sint asperiores <br /> id nobis quam tenetur quaerat?  Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                        </Grid>
                        <Grid  style={{padding:'100px 0px'}}item lg={6} md={12} xs={12} >
                            <img src="https://preview.colorlib.com/theme/immigration/img/r1.png" alt="img nese" />
                            <h3 style={{padding:'10px 0px'}}>Fanie Rowe</h3>
                            <p style={{paddingTop:'10px',color:'lightgray'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Accusantium iure voluptates reprehenderit itaque? Sint asperiores <br /> id nobis quam tenetur quaerat?  Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                        </Grid>

                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Treat