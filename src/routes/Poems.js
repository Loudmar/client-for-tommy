import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import './Poems.css';

function Poems() {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/?_sort=id&_order=desc&_limit=7')
    .then(response => response.json())
    .then(data => setData(data));
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className='poems poems-bg collapse-container'>
      <div className='poem-title-container'>
        <h2 className='poem-title'>Collection Poems</h2>
        <p>Here you will find a collection of my poems. I hope you enjoy reading as much I enjoy writing it.</p>
      </div>
      
      <div className="collapse">
        {data.map((post, i) => (
          <div className="collapse-item">
            <div className="collapse-title" onClick={() => toggle(i)}>
              <h3>{post.title}</h3>
              <span>{selected === i ? <FaArrowUp /> : <FaArrowDown />}</span>
            </div>
            <div className={selected === i ? "collapse-body show" : "collapse-body"}>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Poems