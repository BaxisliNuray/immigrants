import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { ValidationSchema } from '../Validation/Schema'
import { useFormik } from "formik"
import { useNavigate } from 'react-router-dom'
import { postById } from '../api/requests'

function Add() {
  const [immg, setImmg] = useState()
  const navigate = useNavigate
  const handleSubmit = async (values, actions) => {
    await postById(values)
    setImmg([immg, values])
    actions.resetForm()
    navigate("/home")
  }
  const formik = useFormik({
    initialValues: {
      title: '',
      desc: '',
      img: '',
      price: '',
      country: ''
    },
    validationSchema: ValidationSchema,
    onSubmit: handleSubmit
  })


  return (
    <>
      <Helmet>
        <title>ADD</title>
      </Helmet>
      <form onSubmit={formik.handleSubmit} style={{ padding: "10%", display: "flex", alignItems: "center", justifyContent: 'center' }} >
        <div >
        <TextField
            className={formik.errors.country && formik.touched.country ? "input-error" : ""}
            style={{ display: "block", marginBottom: "15%" }} onChange={formik.handleChange}
            name="country"
            type="text"
            value={formik.values.country}
            onBlur={formik.handleBlur}
            id="standard-basic" label="Country" variant="standard" />
          {(formik.errors.country && formik.touched.country) && <small style={{ color: "red" }}>{formik.errors.country}</small>}


          <TextField
            className={formik.errors.price && formik.touched.price ? "input-error" : ""}
            style={{ display: "block", marginBottom: "15%" }} onChange={formik.handleChange}
            name="price"
            value={formik.values.price}
            type="number"
            onBlur={formik.handleBlur}
            id="standard-basic" label="Price" variant="standard" />
          {(formik.errors.price && formik.touched.price) && <small style={{ color: "red" }}>{formik.errors.price}</small>}


          <TextField
            className={formik.errors.title && formik.touched.title ? "input-error" : ""}
            style={{ display: "block", marginBottom: "15%" }} onChange={formik.handleChange}
            name="title"
            type="text"
            value={formik.values.title}
            onBlur={formik.handleBlur}
            id="standard-basic" label="Title" variant="standard" />
          {(formik.errors.title && formik.touched.title) && <small style={{ color: "red" }}>{formik.errors.title}</small>}

          <TextField
            className={formik.errors.desc && formik.touched.desc ? "input-error" : ""}
            style={{ display: "block", marginBottom: "15%" }} onChange={formik.handleChange}
            name="desc"
            value={formik.values.desc}
            onBlur={formik.handleBlur}
            id="standard-basic" type="text" label="Description" variant="standard" />
          {(formik.errors.desc && formik.touched.desc) && <small style={{ color: "red" }}>{formik.errors.desc}</small>}

          <TextField
            className={formik.errors.img && formik.touched.img ? "input-error" : ""}
            style={{ display: "block", marginBottom: "15%" }} onChange={formik.handleChange}
            name="img"
            value={formik.values.img}
            onBlur={formik.handleBlur}
            id="standard-basic" type="url" label="Img" variant="standard" />
          {(formik.errors.img && formik.touched.img) && <small style={{ color: "red" }}>{formik.errors.img}</small>}
          <Button>Add</Button>
        </div>
        
      </form>
    </>
  )
}

export default Add