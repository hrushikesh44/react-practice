import { useEffect, useState } from 'react'

function App() {
  const [countervisible, setcountervisible] = useState(true)
  //conditional rerendering => for displaying the clock in five second intervals
  useEffect(function(){
    setInterval(function(){
      setcountervisible (c => !c)
    }, 5000)
  }, [])

  //useeffect allows function inside it to run only once during rendering

  return<div>
    {countervisible ? <Counter></Counter> : null}
  </div>
}

function Counter(){

  const [count, setCount] = useState(0)

  useEffect(function() { // for mounting the clock into runtime
    let clock = setInterval(function() {
      setCount(function(count) {
        return count + 1;
      })
    }, 1000)

    return function(){ // for unmounting the clock from the runtime
      clearInterval(clock)
    }
    //both mount and unmount logics above only applicable cuz dependency array is empty
  }, [])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  ) 

}

export default App
