import React from 'react'


const LoginButton = ({ category }) => {

    return (
        <button
            type={category === 'login' ? "submit" : "button"}
            className={`p-5 ${category === "login"
                    ? "bg-white text-gray-600 rounded-xl"
                    : "w-full border border-churead-gray-300 border-opacity-15 rounded-2xl flex items-center justify-center gap-4"
                }`}
        >
            {category === "socialLogin" && (
                <img src="./images/google_icon.svg" alt="google로고" />
            )}
            {category === "login" ? "Login" : "Continue with Google"}

        </button>
    );
};

export default LoginButton

