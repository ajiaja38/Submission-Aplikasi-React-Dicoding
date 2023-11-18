/* eslint-disable react/prop-types */
import React from 'react'
import NoteItem from './NoteItem'

const NotesList = ({ notes, archiveNotes, deleteNotes }) => {
  return (
    <div
      className='
        bg-gray-100
        rounded
        border
        p-5
        grid
        grid-cols-1
        lg:grid-cols-3
        2xl:grid-cols-4
        gap-3
        lg:gap-5
      '
    >
      {
        notes.length
          ? (
              notes.map(note => (
                <NoteItem
                  key={note.id}
                  note={note}
                  archiveNotes={archiveNotes}
                  deleteNotes={deleteNotes}
                />
              ))
            )
          : (
              <>
                Tidak ada catatan.
              </>
            )
      }
    </div>
  )
}

export default NotesList
