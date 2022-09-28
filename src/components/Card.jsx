import { AiOutlineFileDone } from 'react-icons/ai'

const Card = ({ title, description, id }) => {
  return (
    <div className="flex flex-col bg-gray-800 px-4 py-4 m-4 rounded-lg text-gray-200 hover:bg-gray-700">
      <span className="text-sm text-gray-600">id : {id}</span>
      <span className="text-3xl">{title}</span>
      <span className="text-md mt-4 text-gray-400"> {description}</span>
      <button className="inline-flex items-center place-content-center gap-4 bg-green-800 px-5 py-3 rounded-md uppercase font-bold text-blue-50 hover:bg-green-600 transition-all mt-10">
        Done
        <AiOutlineFileDone className="text-xl"></AiOutlineFileDone>
      </button>
    </div>
  )
}

export default Card
