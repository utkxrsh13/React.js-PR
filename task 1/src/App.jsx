import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import User from './components/User'
import GradientText from './components/GradientText'
import SplashCursor from './components/SplashCursor'


const App = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    confirmPassword: '',
    email: ''
  })



  const [error, setError] = useState('')

  const [users, setUsers] = useState([])


  const handleChanges = (e) => {

    const { name, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))

  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (formData.password.length < 8) {
      setError('Password must be 8 characters long')
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Password and Confirm Password must same')
      return;
    }
    if (!/[!@#$%^&*()<>,."]/.test(formData.password)) {
      setError('Password must contain any special character')
      return;
    }
    if (!/[A-Z]/.test(formData.password)) {
      setError('Password must contain any capital letter')
      return;
    }

    setUsers((prevUsers) => [
      ...prevUsers, {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      }
    ])



    setError('')
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

    toast.success('Login Successfull! ✅', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  }

  return (
    <>
      <SplashCursor />
      <div className='h-screen flex items-center justify-center z-10'>
        <div className='bg-white rounded-lg p-6 w-96 z-20'>
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create an Account</h2>
            <form onSubmit={(e) => {
              submitHandler(e)
            }} className="flex flex-col gap-4">
              <input
                className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                type="text"
                required
                name='fullName'
                placeholder="Enter Name here"
                value={formData.fullName}
                onChange={handleChanges}
              />
              <input
                className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                type="email"
                required
                placeholder="Enter Your Email"
                name='email'
                value={formData.email}
                onChange={handleChanges}
              />
              <input
                className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                type="password"
                required
                name='password'
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChanges}
              />
              <input
                required
                className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                type="password"
                name='confirmPassword'
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChanges}
              />

              {error && (
                <p className='text-red-500 font-medium text-sm text-center'>{error}</p>
              )}

              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={true}
                className="custom-class px-2 py-2"
              >
                Submit
              </GradientText>
            </form>

            <p className="text-xs text-gray-600 mt-4 text-center">
              By registering, you agree to our <span className="text-indigo-600">Terms & Conditions</span> and <span className="text-indigo-600">Privacy Policy</span>.
            </p>
          </div>

          <ToastContainer>

          </ToastContainer>
        </div>


      </div>
      {users.map(function (elem, idx) {

        return <User key={idx} elem={elem} />
      })}
    </>
  )
}

export default App