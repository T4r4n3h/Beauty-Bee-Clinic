import React from 'react'

function ServiceCardSection() {
  return (
    <div className="service-card-section hidden md:flex w-5/6 h-4/5 mx-auto border-4">
        <div className="LeftSection h-full w-1/2 mr-3">

            <div className="leftTopCon container"
            style={{
                boxShadow:"0px 8px 0px #B3D4CE"
            }}
            >
                <div className="card h-full">
                    <div className="front h-full">
                        <div className="botoximg bg-botox bg-no-repeat bg-cover bg-center h-2/3 rounded-3xl  w-full"></div>
                        <div className="crdtext mt-10 w-full">
                            <h3 className="srvHeader font-bold text-2xl text-center">Neurotoxin Injections</h3>
                           
                            <button className="LrnBtn text-[#C2B6D4] font-black text-center w-full mt-4">LEARN MORE 
                                <svg className='inline font-black ml-2'  width="16" height="16" viewBox="0 0 16 16" fill="none"      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#C2B6D4"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="back h-full bottom-[440px] border-2 border-blue-400">This is gonna be the description for the botox</div>
                </div>
            </div>


            <div className="leftBottomCon container"
            style={{
                boxShadow:"0px 8px 0px #B3D4CE"
            }}
            >
                <div className="card h-full ">
                    <div className="front h-full flex ">
                        <div className="dermaimg w-3/5 h-full  bg-filler bg-no-repeat bg-cover bg-center rounded-3xl ml-6"></div>
                        <div className="crdtext w-2/5 h-fit my-auto ">
                            <h3 className="srvHeader font-bold text-2xl text-center">Dermal Filler</h3>
                            
                            <button className="LrnBtn text-[#C2B6D4] font-black text-center w-full mt-4">LEARN MORE 
                                <svg className='inline font-black ml-2'  width="16" height="16" viewBox="0 0 16 16" fill="none"      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#C2B6D4"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="back h-full  bottom-[200px] border-2 border-green-400">This is gonna be the description for the derma filler</div>
                </div>
                
            </div>

        </div>
        <div className="RightSection w-1/2 ml-6 ">

            <div className="rightTopCon container "
                style={{
                    boxShadow:"0px 8px 0px #B3D4CE"
                }}
                >
                    <div className="card h-full">
                        <div className="front h-full flex">
                            <div className="vitaminimg w-3/5 h-full  bg-vitamin  bg-no-repeat bg-cover bg-center rounded-3xl ml-6"></div>
                            <div className="crdtext w-2/5 h-fit my-auto">
                                <h3 className="srvHeader font-bold text-2xl text-center">Vitamine Injection</h3>
                                <button className="LrnBtn text-[#C2B6D4] font-black text-center w-full mt-4">LEARN MORE 
                                <svg className='inline font-black ml-2'  width="16" height="16" viewBox="0 0 16 16" fill="none"      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#C2B6D4"/>
                                </svg>
                            </button>
                            </div>
                            
                        </div>
                            <div className="back h-full bottom-[200px] border-2 border-blue-400">Description for Vita injection</div>
                        
                    </div>
           
            </div>




            <div className="rightBottom flex h-3/5 mt-6 ">

                <div 
                      className="bottomLeftCon container "
                      style={{
                        boxShadow:"0px 8px 0px #B3D4CE"
                    }}
                >
                    <div className="card h-full">
                        <div className="front h-full">
                            <div className="img  h-3/5 bg-fat  bg-no-repeat bg-cover bg-center rounded-t-3xl"></div>
                            <div className="crdtext  h-fit mt-10">
                                
                                <h3 className="srvHeader font-bold text-2xl text-center">Fat Dessolving Injections</h3>
                                <button className="LrnBtn text-[#C2B6D4] font-black text-center w-full mt-4">LEARN MORE 
                                <svg className='inline font-black ml-2'  width="16" height="16" viewBox="0 0 16 16" fill="none"      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#C2B6D4"/>
                                </svg>
                            </button>
                            </div>
                        </div>
                        <div className="back h-full bottom-[450px] border-2 border-blue-400">Description for Fat desolving </div>
                    </div>


                </div>
                <div 
                        className="bottomRightCon container "
                        style={{
                            boxShadow:"0px 8px 0px #B3D4CE"
                         }}
                    >
                        <div className="card h-full">
                            <div className="front h-full">
                                <div className="img  h-3/5 bg-chemPeel bg-no-repeat bg-cover bg-center rounded-t-3xl"></div>
                                <div className="crdtext  h-fit mt-10">
                                
                                <h3 className="srvHeader font-bold text-2xl text-center">Chemical Peels</h3>
                                <button className="LrnBtn text-[#C2B6D4] font-black text-center w-full mt-4">LEARN MORE 
                                <svg className='inline font-black ml-2'  width="16" height="16" viewBox="0 0 16 16" fill="none"      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#C2B6D4"/>
                                </svg>
                            </button>
                            </div>
                            </div>
                            <div className="back h-full bottom-[450px] border-2 border-blue-300">chem peel</div>
                        </div>
                </div>
                

            </div>

        </div>
    


    
    </div>
  )
}

export default ServiceCardSection