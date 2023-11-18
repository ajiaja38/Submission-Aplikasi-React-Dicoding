/* eslint-disable react/prop-types */
import React from 'react'
import UnArchivedList from './UnArchivedList'
import ArchivedList from './ArchivedList'

const ContainerNotes = ({ notes, archiveNotes, deleteNotes }) => {
  return (
    <div
      className='
        w-full
        lg:w-[70%]
        bg-white
        p-5
        rounded-md
        shadow
        flex
        flex-col
        gap-2
      '
    >
      <UnArchivedList
        notes={notes}
        archiveNotes={archiveNotes}
        deleteNotes={deleteNotes}
      />
      <ArchivedList
        notes={notes}
        archiveNotes={archiveNotes}
        deleteNotes={deleteNotes}
      />
    </div>
  )
}

export default ContainerNotes
