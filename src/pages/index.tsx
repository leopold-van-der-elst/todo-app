import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Task from '../components/task'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  const [text, setText] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);
  const [renderTodo, setRenderTodo] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const result = todo.filter(e => {
      return e.toLowerCase().includes(searchValue.toLowerCase());
    })
    setRenderTodo(result.map((e, i) => {
      return <Task key={i} name={e} />
    }))
  }, [searchValue])

  useEffect(() => {
    setRenderTodo(todo.map((e, i) => {
      return <Task key={i} name={e} />
    })
    )
  }, [todo])


  function addTodo() {
    if (text) {
      setTodo([...todo, text])
      setText("")
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
      <h1>Todo app</h1>
      <div style={{ position: "relative" }}>
        <input style={{ color: "#fff", backgroundColor: "#0096c7", border: "none", borderRadius: "50px", width: "200px", height: "20px", outline: "none", padding: "10px" }} value={text} onChange={(e) => setText(e.target.value)} />
        <button style={{ position: "absolute", marginLeft: "-20%", marginTop: "11px", backgroundColor: "transparent", border: "none", color: "#fff" }} onClick={addTodo}>add</button>
      </div>
      <div style={{ backgroundColor: "#ffb703", marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", }}>
        <input type="text" placeholder="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        {renderTodo}
      </div>
    </div>
  );
}
