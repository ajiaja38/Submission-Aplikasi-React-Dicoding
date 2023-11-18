/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable quotes */
import React, { useState } from "react";
import Navbar from "./Navbar";
import FormAddNotes from "./FormAddNotes";
import ContainerNotes from "./ContainerNotes";
import Footer from "./Footer";
import { getInitialData } from "../utils";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastNotification from "../utils/Toastify";
import Swal from "sweetalert2";

const NotesApp = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchValue, setSearchValue] = useState("");

  const onAddNewNotes = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    setNotes((prevState) => {
      const updateNotes = [...prevState, newNote];
      setSearchValue(updateNotes);
      return updateNotes;
    });
  };

  const onArchivedNotes = (id) => {
    const updatedNotes = [...notes];
    const noteIndex = updatedNotes.findIndex((note) => note.id === id);
    if (updatedNotes[noteIndex].archived === true) {
      updatedNotes[noteIndex].archived = false;
    } else {
      updatedNotes[noteIndex].archived = true;
    }

    setNotes(updatedNotes);
    setSearchValue(updatedNotes);
  };

  const onDeleteNotes = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Anda Ingin Hapus Catatan?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        const note = notes.filter((note) => note.id !== id);
        setNotes(note);
        setSearchValue(note);
        ToastNotification.toastSuccess("Berhasil Hapus Catatan");
      }
    });
  };

  const searchTitle = (title) => {
    const fileteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(title.toLowerCase())
    );
    setSearchValue(fileteredNotes);
  };

  return (
    <div>
      <Navbar searchTitle={searchTitle} />
      <div
        className="
          w-full
          pt-[4.5rem]
          px-2
          flex
          flex-col
          lg:flex-row
          mb-5
        "
      >
        <FormAddNotes addNotes={onAddNewNotes} />
        <ContainerNotes
          notes={searchValue.length ? searchValue : notes}
          archiveNotes={onArchivedNotes}
          deleteNotes={onDeleteNotes}
        />
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default NotesApp;
