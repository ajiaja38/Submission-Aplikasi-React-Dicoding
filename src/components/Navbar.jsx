/* eslint-disable react/prop-types */
import React from 'react'
import SearchNotesForm from './SearchNotesForm'

const Navbar = ({ searchTitle }) => {
  return (
    <div
      className='
        fixed
        top-2
        inset-x-2
        bg-sky-900/90
        backdrop-blur-sm
        rounded-md
        p-3
        shadow
        flex
        justify-between
        items-center
        z-50
      '
    >
      <h1
        className='
         text-white
          text-base
          lg:text-xl
          font-bold
        '
      >
        Personal Notes App
      </h1>
      <SearchNotesForm searchTitle={searchTitle}/>
    </div>
  )
}

export default Navbar
