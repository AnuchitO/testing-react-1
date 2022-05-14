import React, {useEffect, useState} from 'react'

function CleanUpDemo() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('1. useEffect : count : ', count)
    function onScroll() {
      console.log('count: ', count, ', scrollY: ', window.scrollY)
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      console.log('2. useEffect : cleanup : count :', count)
      window.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <div>
      <code>cleanup Demo</code>
      <p>Count {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click here.</button>
    </div>
  )
}

export default CleanUpDemo
