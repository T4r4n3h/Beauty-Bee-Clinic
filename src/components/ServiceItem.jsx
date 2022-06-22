import React from 'react'

function ServiceItem(props) {
  return (
    <div 
    style={{
        boxShadow:"0px 8px 0px #B3D4CE"
    }}
    className='w-2/5 h-24 mt-4 rounded-3xl bg-btn-blue  border-2 border-purple-700'>
        <h3 className="srvHeader font-bold text-lg mt-5 text-center">{props.name}</h3>
       </div>
  )
}

export default ServiceItem