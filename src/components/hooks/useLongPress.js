import { useState, useEffect } from 'react'

export default function useLongPress(
  callback = () => {},
  myCustomInterval,
  ms = 300
) {
  const [startLongPress, setStartLongPress] = useState(false)

  useEffect(() => {
    let timerId
    if (startLongPress) {
      timerId = setTimeout(callback, ms)
    } else {
      clearTimeout(timerId)
    }

    return () => {
      clearTimeout(timerId)
    }
  }, [callback, ms, startLongPress])

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => {
      setStartLongPress(false)
      clearInterval(myCustomInterval)
    },
    onMouseLeave: () => {
      setStartLongPress(false)
      clearInterval(myCustomInterval)
    },
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => {
      setStartLongPress(false)
      clearInterval(myCustomInterval)
    },
  }
}
