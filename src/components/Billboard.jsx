

function Billboard() {
  return (
    <div className=" billboard   h-48 md:h-[33.7rem] md:mt-14  bg-white rounded-3xl flex bg-chryblsm bg-no-repeat bg-right-top bg-contain lg:bg-[length:900px_600px]">
        <div className="msg  mt-8 lg:mt-20 ml-10 lg:ml-28">
            <p className="message text-xl lg:text-7xl leading ">BECAUSE YOU DESERVE </p>
             <p className="message text-4xl lg:text-9xl mt-2 lg:mt-6">BEAUTY</p>

             <button className=" btn mt-4 md:mt-10 bg-btn-blue md:ml-2 rounded-full px-2 md:px-4 py-1 md:py-4 md:w-2/5 "
             style={{
              boxShadow:"0px 8px 0px #C2B6D4"
             }}
             >

              <a href="https://calendly.com" target="_blank" rel="noreferrer" className=" md:hidden" id=""> Book Now</a>
              <a href="https://calendly.com" target="_blank" rel="noreferrer" className="hidden md:block lg:text-2xl" id=""> Book Your Appointment</a>
             </button>
            
        </div>

    </div>
  )
}

export default Billboard