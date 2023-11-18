/* eslint-disable react/prop-types */
import React from 'react'
import NotesList from './NotesList'

const ArchivedList = ({ notes, archiveNotes, deleteNotes }) => {
  return (
    <div>
      <h2
        className='
          text-xl
          font-semibold
          my-2
        '
      >
        Daftar Arsip
      </h2>
      <NotesList
        notes={notes.filter(note => note.archived)}
        archiveNotes={archiveNotes}
        deleteNotes={deleteNotes}
      />
    </div>
  )
}

export default ArchivedList
