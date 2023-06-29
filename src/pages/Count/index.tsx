import useCountStore from '@/stores/count'

import './index.css'

const Count = () => {
  const { count, increase, increaseBy, decrease, reset } = useCountStore()

  return (
    <div className="w-full h-screen flex-center flex-col">
      <p className="text-6xl py-10">count is {count}</p>
      <div className="flex space-x-4">
        <button className="btn" onClick={increase}>
          increase
        </button>
        <button className="btn" onClick={() => increaseBy(2)}>
          increaseBy
        </button>
        <button className="btn" onClick={decrease}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  )
}

export default Count
