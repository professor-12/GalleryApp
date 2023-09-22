import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Data } from '../../Data/Data'
import { SortableContext } from '@dnd-kit/sortable'
import { DndContext, closestCenter } from '@dnd-kit/core'
import Gallerystore from './Gallery-store';
import { rectSwappingStrategy  , arrayMove } from '@dnd-kit/sortable';
import Search from '../Seach'


const Gallery = (props) => {
  useEffect(()=> {
    localStorage.setItem("auth","1")
  })
  const [GalleryData, setGalleryData] = useState(Data)
  const DragFunction = (event) => {
    const {active , over} = event
    if (event.id == over.id) return

    setGalleryData(users=> {
      const oldindex = users.findIndex((item)=> item.id === active.id)
      const newindex = users.findIndex((item)=> item.id === over.id)
      return arrayMove(GalleryData,oldindex,newindex)
    })
  }

  return (
    <>
      <Header  auth={props.auth} />
      <Search changelist={setGalleryData}/>
      <div className='grid  md:w-[80%] mx-auto lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 gap-3'>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={DragFunction}
        >
          <SortableContext items={GalleryData} strategy={rectSwappingStrategy} >

            {GalleryData.map((j , index) => {
              return (
                <Gallerystore key={j.id} tag={j.tag} data={j}/>
              )
            })}
          </SortableContext>
        </DndContext>
      </div>
    </>
  )
}

export default Gallery
