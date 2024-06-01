import { Button, Grid, TextField, Typography } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import AuthModel from './AuthModel';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { blue } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { login } from '../../../State/Auth/Action';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().required("Password is Required")
});

const SigninForm = () => {
    const dispatch = useDispatch();
    const [loginError, setLoginError] = useState('');

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await dispatch(login(values));
                // Assuming response contains success status or error message
                if (response.success) {
                    console.log("form values ", values);
                } else {
                    setLoginError('Incorrect email or password');
                }
            } catch (error) {
                setLoginError('Incorrect email or password');
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name='email'
                        variant='outlined'
                        size='large'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Password"
                        name='password'
                        variant='outlined'
                        size='large'
                        type='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>
                {loginError && (
                    <Grid item xs={12}>
                        <Typography color="error">{loginError}</Typography>
                    </Grid>
                )}
                <Grid className='mt-20' item xs={12}>
                    <Button
                        sx={{ borderRadius: "29px", py: "15px", bgcolor: blue[500] }}
                        type='submit'
                        fullWidth
                        variant='contained'
                        size='large'
                    >
                        Signin
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default SigninForm;
