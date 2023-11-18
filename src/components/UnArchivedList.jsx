/* eslint-disable react/prop-types */
import React from 'react'
import NotesList from './NotesList'

const UnArchivedList = ({ notes, archiveNotes, deleteNotes }) => {
  return (
    <div>
      <h2
        className='
          text-xl
          font-semibold
          mb-2
        '
      >
        Daftar Catatan
      </h2>
      <NotesList
        notes={notes.filter(note => !note.archived)}
        archiveNotes={archiveNotes}
        deleteNotes={deleteNotes}
      />
    </div>
  )
}

export default UnArchivedList
