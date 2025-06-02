import { Formik , Form , Field } from 'formik'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

import './login.css'


export function Login ({users , isLogin , checkLogin}) {

    const navigate = useNavigate()
    
    return (
    <div className="form">
            <button onClick={() => navigate(-1)} className='goBack'>
                Go Back
            </button>
    <Formik
    initialValues={{
        email : '',
        password : ''
    }}
    onSubmit={(values) => checkLogin(users , values)}>
        <Form>
            <div className="inputs">
                <Field name = 'email' type = 'email' required placeholder = 'Email'/>
                <Field name = 'password' type = 'password' required placeholder = 'password'/>
            </div>

            <div className='submit'><button type='submit' className='loginBtn'>Log In</button></div>
        </Form>
    </Formik>

    </div>
    )
}