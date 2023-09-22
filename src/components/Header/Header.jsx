import React from 'react'

const Header = (props) => {

  const HandleLogout = () => {
   props.auth(false)
   localStorage.setItem("auth","1234")
  } 
    return (
    <>
      <nav className='bg-purple-400 text-gray-900 text-xl font-medium mb-12'>
        <div className='flex justify-between p-5 mx-auto md:w-[80%]'>
          <div className='hidden md:inline-block'>Logo</div>
          <div>
            <ul className='flex items-center space-x-3'>
              <li>Welcome!</li>
              <li onClick={HandleLogout} className='border px-4 py-2 hover:bg-gray-300 cursor-pointer border-gray-900'>
                Logout
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
