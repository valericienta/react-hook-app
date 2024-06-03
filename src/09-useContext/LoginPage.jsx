import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className='btn btn-primary' onClick={() => setUser({ id: 123, name: 'Valeria Gigena', email: 'valeria.gigena@gmail.com' })}>Establecer Usuario</button>
    </>
  )
}

export default LoginPage
