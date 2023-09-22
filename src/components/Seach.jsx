import React, { useRef } from 'react'
import { Data } from '../Data/Data'

const Search = (props) => {
  const userInput = useRef()
  function HandleSearch(event) {
    event.preventDefault()
    const FilteredList = Data.filter(item => userInput.current.value.toLocaleLowerCase() === item.tag.toLocaleLowerCase())
    if (FilteredList.length === 0 || userInput.current.value.trim().length === 0) {
      props.changelist(Data)
    }else {
      props.changelist(FilteredList)
    }

  }
  return (
    <form onSubmit={HandleSearch} className='py-3 w-[80%] mx-auto' >
      <input ref={userInput} onChange={HandleSearch} type="text" className='p-3 w-[80%] md:w-[60%] focus:outline-none hover:bg-zinc-700' placeholder='Search by Tag.. eg:"Anime"'/>
    </form>
  )
}

export default Search