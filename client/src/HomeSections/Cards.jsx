import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteById, getAll } from '../api/requests';

function Cards() {
    const [immg, setImmg] = useState()
    useEffect(() => {
        getAll().then((resp) => {
            setImmg(resp)
        })
    }, [])

    return (
        <>
            <Container >
                <div style={{ padding: '80px 0px' }}>
                    <h1 style={{ textAlign: 'center' }}>Requirements to be Immigrants</h1>
                    <p style={{ textAlign: 'center', paddingTop: '1%', color: 'lightgrey' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>

                    <Grid marginTop={'50px'} container spacing={2}>
                        {immg && immg.map((elem) => (
                            <Grid item md={4} lg={3} xs={6}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={elem.img}
                                        title="employee"
                                    />
                                    <CardContent>
                                        <Button style={{ border: '1px solid black', backgroundColor: 'black', color: 'white', fontSize: '12px' }}>{elem.country}</Button>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {elem.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {elem.desc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => {
                                            if (window.confirm("Want delete??")) {
                                                deleteById(elem._id)
                                                setImmg(immg.filter((x) => x._id !== elem._id))
                                            }
                                        }} style={{ color: 'red' }}>Delete</Button>
                                        <Button size="small" style={{ color: 'green' }}>Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        ))}
                    </Grid>

                </div>
            </Container>
        </>
    )
}

export default Cards