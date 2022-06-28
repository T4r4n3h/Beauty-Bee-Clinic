import React from 'react'

function Promotion() {
  return (
    <div className="promotion mt-6 md:mt-16 lg:w-4/5 mx-auto md:h-48 md:flex px-4">
            <h1 className="text-xl md:text-4xl md:mt-6">Time to Treat yourself!</h1>
            <div className="promomsg md:w-1/2 md:ml-24">
                <p className=" md:text-2xl md:leading-10 mt-4">Refer a friend to book an appointment and get 15% off your next treatment!</p>

                <button className=" btn mt-4 block mx-auto bg-btn-blue rounded-full px-4 py-4 w-2/5 "
             style={{
              boxShadow:"0px 8px 0px #C2B6D4"
             }}
             >

              <a href="https://calendly.com" target="_blank"className="" id=""> Book Now</a>
          
             </button>
            </div>
    
    
    </div>
  )
}

export default Promotion