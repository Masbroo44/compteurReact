import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>🚀 Application Déployée par Webhook</h1>
      <p>La branche actuelle est : <b>master</b></p>
      <div style={{ padding: '20px', border: '1px solid #ccc', display: 'inline-block' }}>
        <h2>Compteur : {count}</h2>
        <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Incrémenter
        </button>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

//proot 