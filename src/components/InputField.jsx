import React, { useState } from 'react'


//logic
const InputFeild = ({ type, field, onChange }) => {
    //logic 

    /**
     * 입력값 부모 컴포넌트에 넘겨주기 
     * 1. input 태그에 onChange 이벤트 연결
     * 2. 연결된 함수에서 사용자 입력값 받아오기
     * 3. 받아온 입력값 state에 저장
     * 4. 부모에게 입력값 보내주기
     */
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        console.log("🚀 ~ handleChange ~ event:", event)
        const { value } = event.target;
        
        setValue(value);
        onChange(value, field);

    }

    // view
    return (
        <input
            type={type}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="block rounded-xl border border-gray-800 w-full bg-gray-400 text-white placeholder-gray-700 p-5" 
            onChange={handleChange}
            value={value}
            />
    )

}

export default InputFeild
