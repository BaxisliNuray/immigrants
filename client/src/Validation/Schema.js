import * as yup from 'yup';

export const ValidationSchema = yup.object({
    title:yup.string().max(100).required("title REQUIRED"),
    desc:yup.string().max(300).required("desc REQUIRED"),
    country:yup.string().max(50).required("country REQUIRED"),
    price:yup.number().positive("add + number").integer().required("price REQUIRED"),
    img:yup.string().max(500,"URL can not be this much").required("ulr REQUIRED")
})