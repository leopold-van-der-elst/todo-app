import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Task from '../components/task'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);

  function addTodo() {
    if (text) {
      setTodo([...todo, text])
      setText("")
    }
  }


  const tasks = todo.map((e, i) => {
    return <Task key={i} name={e} ></Task>
  })

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
      <h1>Todo app</h1>
      <div style={{ position: "relative" }}>
        <input style={{ color: "#fff", backgroundColor: "#0096c7", border: "none", borderRadius: "50px", width: "200px", height: "20px", outline: "none", padding: "10px" }} value={text} onChange={(e) => setText(e.target.value)} />
        <button style={{ position: "absolute", marginLeft: "-20%", marginTop: "11px", backgroundColor: "transparent", border: "none", color: "#fff" }} onClick={addTodo}>add</button>
      </div>
      <div style={{ backgroundColor: "#ffb703", marginTop: "20px", }}>
        {tasks}
      </div>
    </div>
  );
}
