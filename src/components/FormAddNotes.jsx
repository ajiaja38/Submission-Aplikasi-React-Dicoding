/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react'
import ToastNotification from '../utils/Toastify'

const ButtonSubmit = () => {
  return (
    <button
      className='
        p-3
        rounded-md
        shadow-md
        text-white
        bg-sky-900
        hover:bg-sky-600
        active:bg-sky-300
        transition-all
        ease-out
        duration-150
      '
    >
      Buat Catatan
    </button>
  )
}

const FormAddNotes = ({ addNotes }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const textRef = useRef(null)

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (title === '' || body === '') {
      ToastNotification.toastError('Data Tidak Boleh Kosong')
    } else {
      const data = {
        title,
        body
      }

      addNotes(data)
      setTitle('')
      setBody('')
      ToastNotification.toastSuccess('Berhasil Tambah Catatan')
    }
  }

  useEffect(() => {
    if (title.length >= 40) {
      textRef.current.style.color = 'red'
    } else {
      textRef.current.style.color = 'black'
    }

    if (title.length > 50) {
      ToastNotification.toastError('Karakter Tidak Boleh Lebih dari 50 karakter!')
      setTitle(title.substring(0, 50))
    }
  }, [title])

  return (
    <div
      className='
        w-full
        lg:w-[30%]
        lg:h-[30rem]
        bg-white
        p-5
        rounded-md
        shadow
        lg:sticky
        lg:top-[4.5rem]
        mb-3
        lg:mb-0
        lg:mr-3
      '
    >
      <h2
        className='
          text-lg
          font-semibold
          mb-4
        '
      >
        Tambah Catatan
      </h2>
      <form
        onSubmit={onSubmitHandler}
      >
        <div
          className='
            flex
            flex-col
            gap-2
            mb-3
          '
        >
          <label
            className='
              font-semibold
            '
          >
            <div
              className='
                w-full
                flex
                justify-between
              '
            >
              <h3>Judul</h3>
              <span ref={textRef}>Sisa Karakter: {50 - title.length}</span>
            </div>
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='
              rounded-md
              outline-none
              border-2
              focus:ring-2
              focus:ring-blue-500
              p-3
              transition-all
              ease-linear
              duration-150
            '
            placeholder='Masukkan Judul Catatan'
          />
        </div>

        <div
          className='
            flex
            flex-col
            gap-2
            mb-3
          '
        >
          <label
            className='
              font-semibold
            '
          >
            Catatan
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className='
              rounded-md
              outline-none
              border-2
              focus:ring-2
              focus:ring-blue-500
              p-3
              transition-all
              ease-linear
              duration-150
            '
            rows={7}
            placeholder='Masukkan Catatan Anda...'
          />
        </div>

        <div
          className='
            flex
            flex-col
            gap-2
            mb-3
          '
        >
          <ButtonSubmit/>
        </div>

      </form>
    </div>
  )
}

export default FormAddNotes
