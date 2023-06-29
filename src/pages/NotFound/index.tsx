import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full h-screen flex-center flex-col">
      <div className="py-3 text-md ">当前页面不存在</div>
      <div
        className="py-2 px-5 bg-blue-500 text-white rounded-md shadow-md cursor-pointer"
        onClick={() => navigate('/')}
      >
        返回首页
      </div>
    </div>
  )
}

export default NotFound
