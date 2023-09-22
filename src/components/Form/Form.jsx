import React, { useRef, useState } from 'react'

const Form = props => {
  const [isauth, setisauth] = useState(false)
  const emailref = useRef()
  const passcoderef = useRef()
  const [error, seterror] = useState(null)

  const Submithandler = (e) => {
    e.preventDefault()
    const emailhasError = emailref.current.value !== 'emaile@example.com'
    const passcodehaserror = passcoderef.current.value !== '1Password'
    const FormHasError = emailhasError || passcodehaserror

    if (FormHasError) {
      seterror({ message: 'Invalid Email or Passcode.' })
      alert(error.message)
      return
    }

    seterror(null)
    setisauth(true)
    localStorage.getItem("auth","1")
    props.FormData(isauth)
  }

  return (
    <form onSubmit={Submithandler} className=''>
      <div className='bg-white md:w-[50%] rounded-xl mx-auto w-[75%] my-14 p-12 text-black space-y-5 eounded-xl'>
        <h1 className='text-center font-bold text-2xl'>Login.</h1>
        <div className='flex justify-center'>
          <div className='bg-purple-600 w-24 h-[3px]'></div>
        </div>

        {
          error && 
        <div className='bg-red-300 p-4 text-lg text-red-900'> 
         <p>{error.message}</p>
        </div>
        }
        <div className='flex flex-col space-y-4'>
          <label htmlFor='Email' className='text-xl'>
            Email <span className='text-lg font-medium text-purple-800'>*</span>
          </label>
          <input
            className='bg-transparent border-2 focus:border-purple-500 focus:bg-purple-200 border-gray-600 focus:outline-none p-3'
            name='Email'
            ref={emailref}
            type='email'
          />
        </div>
        <div className='flex flex-col space-y-4'>
          <label htmlFor='passcode' className='text-xl'>
            Passcode <span className='text-purple-500'>*</span>
          </label>
          <input
            className='bg-transparent border-2 focus:border-purple-500 focus:bg-purple-200 border-gray-600 focus:outline-none p-3'
            name='passcode'
            ref={passcoderef}
            type='password'
          />
        </div>
        <div className='flex justify-end'>
          <div className='bg-orange-600 text-white font-medium text-lg hover:bg-orange-500  rounded'>
            <button type='submit' className='bg-black px-5 py-2'>
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Form
