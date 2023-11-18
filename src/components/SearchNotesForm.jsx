/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const SearchNotesForm = ({ searchTitle }) => {
  const [value, setValue] = useState('')

  const searchHandle = (title) => {
    searchTitle(title)
    setValue(title)
  }

  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={(e) => searchHandle(e.target.value)}
        className='
          bg-white
          rounded-l-lg
          outline-none
          shadow-md
          p-1
          px-2
          w-32
          lg:w-52
          placeholder:text-xs
        '
        placeholder='Cari Catatan Anda'
      />
      <button
      onClick={() => searchTitle(value)}
        className='
          text-white
          p-1
          px-2
          rounded-r-lg
          bg-emerald-500
        '
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  )
}

export default SearchNotesForm
