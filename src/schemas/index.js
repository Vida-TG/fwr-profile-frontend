import * as yup from 'yup'
const passwordRules = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/
const phonenumberRules = /(^[+]\d{13}$)/

export const loginSchema = yup.object().shape({
    email: yup.string().required('Required'),
    password: yup.string().required('Required')
})

export const emailSchema = yup.object().shape({
    email: yup.string().email('Invalid Email Address').required('Required')
})

export const passwordSchema = yup.object().shape({
    password: yup.string().matches(passwordRules, { message: 'Please create a stronger password' }).required('Required')
})

export const phonenumberSchema = yup.object().shape({
    phonenum: yup.string().matches(phonenumberRules, { message: 'Enter your country code' }).required('Required')
})