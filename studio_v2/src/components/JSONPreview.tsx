import React from 'react'

const JsonPreview = ({ document }) => (
  <div style={{
    paddingInline: "1rem"
  }}>
    <h2>JSON Data for "{document.displayed.title}"</h2>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </div>
)
export default JsonPreview
