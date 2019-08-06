import React from 'react'

export default function Editor(props) {
  return (
    <div className="editor">
      <h3>Editor</h3>
      <textarea 
        id="editor"
        value={props.text}
        onChange={props.handleChange}
        type="text"
       />
    </div>
  )
}