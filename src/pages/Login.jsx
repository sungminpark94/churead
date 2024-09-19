import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import LoginButton from '../components/LoginButton';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

//logic
const Login = () => {

    // const newFormData = {...FormData [field] }
    // const history = useNavigate()

    //     const goToHome = () => {
    //         history('/');
    // };
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('')
    // const password = ({password, setPassword}) => useState '');

    const handleInputChange = (inputValue, field) => {
        if (field === "email") {
            setEamil(inputValue)
        } else {
            setPassword(inputValue);
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();
        console.log("email", email)
        console.log("password", password)
    }
    //view
    return (
        <div className='h-full flex flex-col justify-center '>
            <div className='text-center px-6'>
                {/* <h2>Login</h2> */}
                {/* <button type='button' onClick={goToHome}>Home화면으로 이동</button>
            <Link to={'/'}> Home화면으로 이동</Link> */}
                <h1 className='flex justify-center'>
                    <img src='./images/logo.svg' alt='churead로고' />
                </h1>

                <h3 className='text-white font-bold text-center flex flex-col text-base py-6'>churead에서 소통해보세요.</h3>

                <form
                    id="login-form"
                    className="text-center flex flex-col gap-2"
                    onSubmit={handleLogin}
                >

                    <InputField
                        type="text"
                        field="email"
                        onChange={handleInputChange}
                    />

                    <InputField
                        type="password"
                        field="password"
                        onChange={handleInputChange}
                    />

                    <LoginButton category="login" text="Login" />
                </form>

                <div className='flex justify-center gap-1 py-6'>
                    <p className='text-gray-600'>계정이 없으신가요?</p>
                    <Link to="/signIn" className="text-blue-400">가입하기</Link>

                </div>

                <LoginButton category="socialLogin" />

            </div>
        </div>
    )
}

export default Login



