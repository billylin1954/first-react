import React from 'react'
import ReactDOM from 'react-dom'
const headerStyles = {
    backgroundColor: '#61DBFB',
    fontFamily: 'Helvetica Neue',
    padding: 25,
    lineHeight: 1.5,
  }
  const mainstyle ={
    backgroundColor: '#F3F0F5',
  }
const amazing=<main style={mainstyle}>
 <div>
    <p>what is needed for React</p>
    <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
    </ul>
 </div>
</main>
const jsxElement = <header style={headerStyles}>
<h1>Welcome to 30 Days Of React</h1>
<h2>Getting Started React</h2>
<h3>JavaScript Library</h3>
<p>Asabeneh Yetayeh</p>
<small>Oct 2, 2020</small>
</header>
const output=(<div class="app">
    {jsxElement}
    {amazing}
</div>)
const rootElement = document.getElementById('root')

ReactDOM.render(output, rootElement)