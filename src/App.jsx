import { useEffect, useState } from "react"
import { Button } from './components/ui/button'

function App() {

  const [count, setCount] = useState(0)
  const addFile = () => {
  }

  useEffect(() => {
    if (count > 3) {
      addFile()
    }
  }, [])

  return (
    <div className="">
      <Button>
        x
      </Button>
      <h1 className="text-3xl font-bold underline">
        Hello world!  {__dirname}
      </h1>
      {count}
      <button onClick={() => setCount(count + 1)}>Add One </button>
    </div>
  )
}

export default App
