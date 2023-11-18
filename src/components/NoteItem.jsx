/* eslint-disable react/prop-types */
import React from "react";
import { showFormattedDate } from "../utils";

const ArchivedButton = ({ id, isArchived, archiveNotes }) => {
  const archiveHandler = (id) => {
    archiveNotes(id);
  };

  return (
    <button
      onClick={() => archiveHandler(id)}
      className="
        p-2
        bg-yellow-400
        rounded
        shadow
      "
    >
      {!isArchived ? <>Arsipkan</> : <>Batal Arsip</>}
    </button>
  );
};

const DeleteButton = ({ id, deleteNotes }) => {
  const deleteHandler = (id) => {
    deleteNotes(id);
  };

  return (
    <button
      onClick={() => deleteHandler(id)}
      className="
        p-2
        bg-red-500
        rounded
        shadow
      "
    >
      Hapus
    </button>
  );
};

const NoteItem = ({ note, archiveNotes, deleteNotes }) => {
  return (
    <div
      className="
        w-full
        lg:w-64
        h-fit
        p-4
        px-5
        bg-emerald-500
        text-white
        rounded-md
        shadow-sm
        hover:bg-lime-500
        hover:shadow-xl
        transition-all
        ease-out
        duration-150
      "
    >
      <div
        className="
          border-b
          mb-3
        "
      >
        <h3
          className="
            font-semibold
            text-lg
          "
        >
          {note.title}
        </h3>
        <span>{showFormattedDate(note.createdAt)}</span>
      </div>
      <p className="text-sm text-justify mb-5">{note.body}</p>

      <div
        className="
          flex
          gap-2
          justify-end
        "
      >
        <ArchivedButton
          id={note.id}
          isArchived={note.archived}
          archiveNotes={archiveNotes}
        />
        <DeleteButton id={note.id} deleteNotes={deleteNotes} />
      </div>
    </div>
  );
};

export default NoteItem;
