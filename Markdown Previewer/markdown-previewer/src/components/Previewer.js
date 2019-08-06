import React from 'react'
import marked from 'marked'

export default function Previewer(props) {
  return (
    <div className="preview">
      <h3>Preview Markdown</h3>
      <p id="preview" dangerouslySetInnerHTML={{__html: marked(props.markdown)}}></p>
    </div>
  )
}