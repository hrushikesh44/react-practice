import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(function() {
    setInterval(function() {
      setCount(function(count) {
        return count + 1;
      })
    }, 1000)
  }, [])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default App
