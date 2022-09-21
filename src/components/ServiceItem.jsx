import React from 'react'

function ServiceItem(props) {
  return (
    <div 
    style={{
        boxShadow:"0px 8px 0px #B3D4CE"
    }}
    className='w-4/5 h-20 mt-4 rounded-3xl bg-btn-blue'>
        <a href={props.book} target="_blank" rel="noreferrer">
          <h3 className="srvHeader font-bold text-lg mt-6 text-center">{props.name}</h3>

        </a>
       </div>
  )
}

export default ServiceItem