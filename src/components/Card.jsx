import { VscTrash } from 'react-icons/vsc'
import Button from './Button'
import { useRouter } from 'next/router'

const Card = ({ title, description, id, index }) => {
  const { push } = useRouter()

  return (
    <div
      className="flex place-items-center place-content-between bg-gray-800 px-4 py-4 m-4 rounded-lg text-gray-200 hover:bg-gray-700 cursor-pointer"
      onClick={() => push(`/edit/${id}`)}>
      <span className="text-4xl  mr-8 text-gray-500 hover:text-gray-200">
        {index + 1}
      </span>
      <div className="flex flex-col  w-full">
        <span className="text-sm text-gray-600">id : {id}</span>
        <h1 className="text-3xl">{title}</h1>
        <p className="text-md mt-4 text-gray-400"> {description}</p>
        <div className="flex gap-4 place-content-end">
          <Button action={'delete'} clr={'red'}>
            <VscTrash className="text-xl" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
