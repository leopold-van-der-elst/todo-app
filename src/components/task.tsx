import React, { useState, useRef } from 'react'


export default function Task(props: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined }) {

  const nameRef = useRef<HTMLParagraphElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [edit, setEdit] = useState(false)
  const [text, setText] = useState("")


  function deleteTask() {
    if (containerRef.current)
      containerRef.current.style.display = "none"
  }

  function updateTask() {
    if (nameRef.current) {
      nameRef.current.innerHTML = text
      setText("")
      setEdit(!edit)
    }
  }

  return (
    <div ref={containerRef} style={{ display: "flex", minWidth: "300px", height: "50px", justifyContent: "space-between", alignItems: "center", margin: "10px" }}>
      {edit ?
        <div>
          <input style={{ display: "block" }} type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <p style={{ display: "none" }} ref={nameRef}>{props.name}</p>
        </div>
        :
        <div>
          <input style={{ display: "none" }} type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <p style={{ display: "block" }} ref={nameRef}>{props.name}</p>
        </div>
      }
      <div style={{ display: "flex" }}>
        {edit ?
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => updateTask()}>validate</button>
            <button onClick={() => setEdit(!edit)}>cancel</button>
          </div>
          : <button onClick={() => setEdit(!edit)}>edit</button>
        }
        <button onClick={() => deleteTask()}>done</button>
      </div>
    </div>
  )
}