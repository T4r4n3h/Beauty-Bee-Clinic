import React from 'react'

function ServiceCardSection() {
  return (
    <div className="service-card-section hidden md:flex w-5/6 h-4/5 border-2 border-red-500 mx-auto">
    <div className="cardLeft h-full w-1/2 mr-6">

        <div className="leftTop h-3/5 border-2 border-blue-500 px-6 pt-4">
            <div className="botoximg bg-botox bg-no-repeat bg-cover bg-center h-1/2 rounded-2xl  w-full border-2 border-purple-400"></div>
            <div className="crdtext h-3/5 w-full border">
                <h3 className="srvHeader">botox</h3>
                <p className="srvtxt">description</p>
            </div>
        </div>
        <div className="leftBottom h-2/5 border-2 border-yellow-400"></div>

    </div>
    <div className="cardRight border border-green-400 w-1/2 ml-6 ">3</div>
            
    
    </div>
  )
}

export default ServiceCardSection