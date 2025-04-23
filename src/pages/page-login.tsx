import React from 'react'
import loginSchema from '../form-schema/login.json'
import FormGenerator from '../components/form-generator'

export default function PageLogin() {
  // const handleUsernameChange = (value, formData) => {
  //   // formData - monitora o estado anterior dos campos do formulário
  //   // value - monitora o valor atual do campo alterado
  //   return value
  // };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <FormGenerator 
          schema={loginSchema}
          onSubmit={{}}
          inputHandlers={{
            handleUsernameFocus: () => console.log('Campo usuário focou'),
            handleUsernameBlur: () => console.log('Campo usuário perdeu foco')
          }}
          />
      </div>
    </div>
  )
}