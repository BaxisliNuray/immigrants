import React from 'react'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import styles from "./hero.module.css";

function Hero() {
    return (

        <Grid className={styles.container} container spacing={2} style={{ backgroundColor: '#f6214b' }}>
            <Grid className={styles.leftside} item style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }} lg={6}>
                <div className={styles.content}>
                    <p style={{ color: 'white', }}>PROCESS VISA WITHOUT WITHINM HOURS</p>
                    <h1 style={{ fontSize: '60px', color: 'white', fontFamily: 'sans-serif', paddingTop: '10px' }}>Immigrations & <br />
                        Visa Consultation</h1>
                    <Button style={{ textDecoration: 'none', border: '1px solid white', color: 'white', padding: '5px 20px', marginTop: '20px' }}>Home Consultancy </Button>
                </div>

            </Grid>
            <Grid className={styles.imgWrapper}  item lg={6} md={12} xs={12} height={'100%'} style={{ display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
                <img className={styles.img}  src="https://preview.colorlib.com/theme/immigration/img/header-img.png" alt="img" />
            </Grid>

        </Grid>


    )
}
export default Hero
