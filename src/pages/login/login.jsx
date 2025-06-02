import { Formik , Form , Field } from 'formik'
import {  useNavigate } from 'react-router-dom'

import './login.css'

export function Login ({users , isLogin}) {
    const navigate = useNavigate()
    
    const checkLogin = (users , values) => {
        const user = users.find((user) => user.email === values.email)
        if(user) {
            if(user.password === values.password){
                isLogin(user.name)
            }
        }
    }

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