import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Gallerystore = ({ data , tag}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: data.id })
  const Style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  return (
    <div className='relative' ref={setNodeRef}  style={Style} {...attributes} {...listeners}>
      <div className='relative text-white h-[20rem] flex-auto  border-slate-500  border rounded flex justify-center items-center'>
        <img
          src={data.image}
          alt='image'
          className='object-cover w-full h-[100%]'
        />
      </div>
        <div className='absolute -bottom-2 -right-2 border-4 bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center  p-3'>{tag}</div>
    </div>
  )
}

export default Gallerystore
