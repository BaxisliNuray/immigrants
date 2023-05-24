import { Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';

function Collaboration() {
    return (
        <>
            <Container>
                <Grid container spacing={10} style={{padding:'80px 0px',display:'flex',justifyContent:'center'}} >
                    <Grid item lg={2} md={4} xs={6}>
                        <img src="	https://preview.colorlib.com/theme/immigration/img/l1.png" alt="" />
                    </Grid>
                    <Grid item lg={2} md={4} xs={6}>
                        <img src="	https://preview.colorlib.com/theme/immigration/img/l2.png" alt="" />
                    </Grid>
                    <Grid item lg={2} md={4} xs={6}>
                        <img src="	https://preview.colorlib.com/theme/immigration/img/l3.png" alt="" />
                    </Grid>
                    <Grid item lg={2} md={4} xs={6}>
                        <img src="	https://preview.colorlib.com/theme/immigration/img/l4.png" alt="" />
                    </Grid>
                    <Grid item lg={2} md={4} xs={6}>
                        <img src="	https://preview.colorlib.com/theme/immigration/img/l5.png" alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>)
}

export default Collaboration