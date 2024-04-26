import { Button, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import AuthModel from './AuthModel';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { blue } from '@mui/material/colors';
import { TransgenderTwoTone } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { register } from '../../../State/Auth/Action';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().required("Password is Required")
})


const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i)
const days = Array.from({ length: 31 }, (_, i) => i + 1)
const months = [
    { value: 1, label: "January" },
    { value: 2, label: "July" },
]


const SignupForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            dateOfBirth: {
                daty: '',
                month: '',
                year: ''
            }
        },
        validationSchema,
        onSubmit: (values) => {
            const { day, month, year } = values.dateOfBirth
            const dateOfBirth = `${year} - ${month} - ${day}`
            values.dateOfBirth = dateOfBirth;

            dispatch(register(values))
            console.log("form values ", values)
        }
    });


    const handleDateChange = (name) => (event) => {
        formik.setFieldValue("dateOfBirth", {
            ...formik.values.dateOfBirth,
            [name]: event.target.value,
        })
    }


    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>

                    <TextField
                        fullWidth
                        label="First Name"
                        name='firstName'
                        variant='outlined'
                        size='large'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />

                </Grid>

                <Grid item xs={12}>

                    <TextField
                        fullWidth
                        label="Last Name"
                        name='lastName'
                        variant='outlined'
                        size='large'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />

                </Grid>

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

                <Grid item xs={4}>
                    <InputLabel>Day</InputLabel>
                    <Select name='day'
                        fullWidth
                        onChange={handleDateChange("day")}
                        onBlur={formik.handleBlur}
                        value={formik.values.dateOfBirth.day}>
                        {days.map((day) => (
                            <MenuItem key={day} value={day}>
                                {day}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>

                <Grid item xs={4}>
                    <InputLabel>Month</InputLabel>
                    <Select name='month'
                        fullWidth
                        onChange={handleDateChange("month")}
                        onBlur={formik.handleBlur}
                        value={formik.values.dateOfBirth.month}>
                        {months.map((month) => (
                            <MenuItem key={month.label} value={month.value}>
                                {month.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>

                <Grid item xs={4}>
                    <InputLabel>Year</InputLabel>
                    <Select name='year'
                        fullWidth
                        onChange={handleDateChange("year")}
                        onBlur={formik.handleBlur}
                        value={formik.values.dateOfBirth.year}>
                        {years.map((year) => (
                            <MenuItem key={year} value={year}>
                                {year}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>

                {/* <Grid item xs={4}>
                    <InputLabel>Role</InputLabel>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Role"
                        name="role"
                    >
                        <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
                        <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                    </Select>
                </Grid> */}

                <Grid className='mt-20' item xs={12}>
                    <Button sx={{ borderRadius: "29px", py: "15px", bgcolor: blue[500] }}
                        type='submit'
                        fullWidth
                        variant='contained'
                        size='large'
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default SignupForm;