import { useState } from 'react'
import React from 'react'

const AddEvent = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
 

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert('Please add a Event')
      return
    }

    onAdd({ text: title, day: description})

    setTitle('')
    setDescription('')
  }

  return (
    <form className='add-event' onSubmit={onSubmit}>
      <div className='event-control'>
        <label>Event Title</label>
        <input
          type='text'
          placeholder='Add Event Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='event-control'>
        <label>Description</label>
        <input
          type='text'
          placeholder='Add Event Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Event' className='btn btn-block' />
    </form>
  )
}

export default AddEvent