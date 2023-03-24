import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp, FaSistrix } from 'react-icons/fa';
import './Poems.css';

function Poems({ isLoggedIn }) {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

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

  const filteredPosts = data.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='poems poems-bg collapse-container'>
      <div className='poem-title-container'>
        <h2 className='poem-title'>Poem's Collection</h2>
        <p>Here you will find a collection of my poems. I hope you enjoy reading as much I enjoy writing it.</p>
      </div>
      <div className="search-container">
        <FaSistrix />
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Poems"
        />
      </div>
      <div className="collapse">
        {filteredPosts.map((post, i) => (
          <div className="collapse-item" key={post.id}>
            <div className="collapse-title" onClick={() => toggle(i)}>
              <h3>{post.title}</h3>
              <span>{selected === i ? <FaArrowUp /> : <FaArrowDown />}</span>
            </div>
            <div className={selected === i ? "collapse-body show" : "collapse-body"}>
              <p>{post.body}</p>
              {isLoggedIn? <button type='button'>Edit</button> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Poems