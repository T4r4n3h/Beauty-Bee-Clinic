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
                    <div className="front h-full border-2 border-rose-400">
                        <div className="botoximg bg-botox bg-no-repeat bg-cover bg-center h-1/2 rounded-3xl  w-full"></div>
                        <div className="crdtext  w-full">
                            <h3 className="srvHeader font-bold text-lg mt-5">Neurotoxin Injections</h3>
                            <p className="srvtxt text-lg leading-6">
                                Botox injections block certain chemical signals from nerves, mostly signals that cause muscles to contract. The most common use of these injections is to temporarily relax the facial muscles that cause wrinkles in the forehead and around the eyes.
                            </p>
                            <button className="text-[#C2B6D4] font-black">LEARN MORE <svg className='inline font-black' width="16" height="16" viewBox="0 0 16 16" fill="none"      xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#C2B6D4"/>
                                </svg></button>
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
                    <div className="front h-full flex border-2 border-red-400">
                        <div className="dermaimg w-3/5 h-full  bg-filler bg-no-repeat bg-cover bg-center rounded-3xl ml-2"></div>
                        <div className="crdtext ml-2 w-2/5">
                            <h3 className="srvHeader font-bold text-lg mt-5">Derma Filler</h3>
                            <p className="srvtxt text-lg leading-6">Dermal fillers are gel-like substances injected under the skin. Dermal fillers are meant to create a smoother or fuller appearance, or both.</p>
                            <button className="text-[#C2B6D4] font-black">LEARN MORE <svg className='inline font-black' width="16" height="16" viewBox="0 0 16 16" fill="none"      xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#C2B6D4"/>
                                </svg></button>
                        </div>
                    </div>
                    <div className="back h-full  bottom-[200px] border-2 border-green-400">This is gonna be the description for the derma filler</div>
                </div>
                
            </div>

        </div>
        <div className="cardRight w-1/2 ml-6 ">

            <div className="rightTopCon container "
                style={{
                    boxShadow:"0px 8px 0px #B3D4CE"
                }}
                >
                    <div className="card h-full">
                        <div className="front h-full flex border-2 border-red-400">
                            <div className="vitaminimg w-3/5 h-full  bg-vitamin  bg-no-repeat bg-cover bg-center rounded-3xl "></div>
                            <div className="crdtext ml-2 w-2/5">
                                <h3 className="srvHeader font-bold text-lg mt-5">Vitamine Injection</h3>
                                <p className="srvtxt text-lg leading-6">
                                    Melania to provide with the best description of the injection
                                </p>
                                <button className="text-[#C2B6D4] font-black">LEARN MORE <svg className='inline font-black' width="16" height="16" viewBox="0 0 16 16" fill="none"      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#C2B6D4"/>
                                    </svg></button>
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
                        <div className="front h-full border-2 border-red-400">
                            <div className="img  h-2/5 bg-fat  bg-no-repeat bg-cover bg-center rounded-t-3xl"></div>
                            <div className="crdtext ml-3">
                                <h1 className="srvHeader font-bold text-lg mt-5 "> Fat Desolving Injection</h1>
                                <p className="srvtxt text-lg leading-6 mt-4">Fat-dissolving treatment is a simple and non-invasive cosmetic procedure that uses injections to target fat deposits in the body. </p>
                                <button className="text-[#C2B6D4] font-black mt-6">LEARN MORE <svg className='inline font-black' width="16" height="16" viewBox="0 0 16 16" fill="none"      xmlns="http://www.w3.org/2000/svg">
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
                                <div className="img  h-2/5 bg-chemPeel bg-no-repeat bg-cover bg-center rounded-t-3xl"></div>
                                <div className="crdtext ml-3">
                                    <h1 className="srvHeader font-bold text-lg mt-5">Chemical Peels</h1>
                                    <p className="srvtxt text-lg leading-6">This is a technique used to improve the texture of the skin. It is intended to remove the outermost layer of the skin resulting wound healing process to regenerate new tissue</p>
                                    <button className="text-[#C2B6D4] font-black mt-6">LEARN MORE <svg className='inline font-black' width="16" height="16" viewBox="0 0 16 16" fill="none"      xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#C2B6D4"/>
                                            </svg></button>
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