import React from 'react'
import './PageHeader.css'

const PageHeader = (props) => {
    const {title,icon}=props
  return (

    <div className='wraper'>
        <h1 className='titre'>{title}</h1>
        <span className='icon'>{icon} </span>
      
    </div>
  )
}

export default PageHeader
