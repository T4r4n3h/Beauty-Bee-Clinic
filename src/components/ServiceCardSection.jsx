import React from 'react'

function ServiceCardSection() {
  return (
    <div className="service-card-section hidden md:flex w-5/6 h-4/5 mx-auto ">
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
                                <svg className='inline font-black ml-2'  width="16" height="16" viewBox="0 0 16 16" fill="none"xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#C2B6D4"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="back bottom-[440px] p-10">
                    
                    <p className='font-normal'>
                            Botox injections block certain chemical signals from nerves, mostly signals that cause muscles to contract. The most common use of these injections is to temporarily relax the facial muscles that cause wrinkles in the forehead and around the eyes.
                        </p>
                        {/* <h3 className="font-bold ">Price</h3> */}
                        
                        <div className="Buttons flex justify-between mt-16">
                            <button
                            className='btn bg-btn-blue rounded-full w-fit px-4 py-2 '
                            style={{boxShadow:"0px 8px 0px #C2B6D4"}}
                            >
                            <a href="https://calendly.com/melavimelavi/neurotoxin-botox" target="_blank" rel="noreferrer" className="" id=""> Book Appointment</a>
                            </button>
                            <button
                            className='btn bg-btn-blue rounded-full px-4 py-2 '
                            style={{boxShadow:"0px 8px 0px #C2B6D4"}}
                            >
                            <a href="tel:+1647-223-1975" rel="noreferrer" className="" id="">Call for Consultation</a>
                            </button>
                        </div>
                    </div>
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
                    <div className="back  bottom-[200px] px-10">
                        <p className='font-normal'>
                        Dermal fillers are gel-like substances injected under the skin. Dermal fillers are meant to create a smoother or fuller appearance, or both.
                        </p>
                           
                        <div className="Buttons flex justify-between mt-16">
                            <button
                            className='btn bg-btn-blue rounded-full w-fit px-4 py-2 '
                            style={{boxShadow:"0px 8px 0px #C2B6D4"}}
                            >
                            <a href="https://calendly.com/melavimelavi/derma-filler-60-min" target="_blank" rel="noreferrer" className="" id=""> Book Appointment</a>
                            </button>
                            <button
                            className='btn bg-btn-blue rounded-full px-4 py-2 '
                            style={{boxShadow:"0px 8px 0px #C2B6D4"}}
                            >
                            <a href="tel:+1647-223-1975" rel="noreferrer" className="" id="">Call for Consultation</a>
                            </button>
                        </div>
                    </div>
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
                            <div className="back  bottom-[200px] px-10">
                            <p className='font-normal'>
                            Vitamin B12 is also called the ‘energy vitamin’. It considered the most versatile of all vitamins due to its vast range of fundamental nerve functions, processing carbs and fats, forming red blood cells, and producing DNA Vitamin B12 has positive effects on both body and mind.
                              </p>
                                <div className="Buttons flex justify-between mt-10">
                                    <button
                                    className='btn bg-btn-blue rounded-full w-fit px-4 py-2 '
                                    style={{boxShadow:"0px 8px 0px #C2B6D4"}}
                                    >
                                    <a href="https://calendly.com/melavimelavi/vitamin-injections-30" target="_blank" rel="noreferrer" className="" id=""> Book Appointment</a>
                                    </button>
                                    <button
                                    className='btn bg-btn-blue rounded-full px-4 py-2 '
                                    style={{boxShadow:"0px 8px 0px #C2B6D4"}}
                                    >
                                    <a href="tel:+1647-223-1975" rel="noreferrer" className="" id="">Call for Consultation</a>
                                     </button>
                                 </div>
                            </div>
                        
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
                                
                                <h3 className="srvHeader font-bold text-2xl text-center">Fat Dissolving Injections</h3>
                                <button className="LrnBtn text-[#C2B6D4] font-black text-center w-full mt-4">LEARN MORE 
                                <svg className='inline font-black ml-2'  width="16" height="16" viewBox="0 0 16 16" fill="none"      xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#C2B6D4"/>
                                </svg>
                            </button>
                            </div>
                        </div>
                        <div className="back h-full bottom-[450px] p-6 rounded-3xl">Description for Fat dissolving 
                        <p className="font-normal">
                        Fat-dissolving treatment, also known as lipolytic injections, is a simple and non-invasive cosmetic procedure that uses injections to target fat deposits in the body. These injections use Deoxycholic acids, a synthetic form of naturally-occurring acids in the body.
                        </p>
                        <div className="Buttons mt-10">
                                    <button
                                    className='btn bg-btn-blue rounded-full  px-4 py-2  '
                                    style={{boxShadow:"0px 8px 0px #C2B6D4"}}
                                    >
                                    <a href="https://calendly.com/melavimelavi/fat-dissolving-solution-45-min" target="_blank" rel="noreferrer" className="" id=""> Book Appointment</a>
                                    </button>
                                    <button
                                    className='btn bg-btn-blue rounded-full px-4 py-2 mt-10 '
                                    style={{boxShadow:"0px 8px 0px #C2B6D4"}}
                                    >
                                    <a href="tel:+1647-223-1975" rel="noreferrer" className="" id="">Call for Consultation</a>
                                     </button>
                                 </div>
                        </div>
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
                            <div className="back h-full bottom-[450px] p-6 rounded-3xl">
                            <p className="font-normal">
                            This is a technique used to improve the texture of the skin. It is intended to remove the outermost layer of the skin.To accomplish this task, the chosen  peel solution induces a controlled injury to the skin. Resulting wound healing processes begin to regenerate new tissues. The dead skin eventually peels off.
                               
                            </p>
                           
                            <div className="Buttons mt-10 ">
                                    <button
                                    className='btn bg-btn-blue rounded-full  px-4 py-2  '
                                    style={{boxShadow:"0px 8px 0px #C2B6D4"}}
                                    >
                                    <a href="https://calendly.com/melavimelavi/chemical-peels-30-min" target="_blank" rel="noreferrer" className="" id=""> Book Appointment</a>
                                    </button>
                                    <button
                                    className='btn bg-btn-blue rounded-full px-4 py-2 mt-10 '
                                    style={{boxShadow:"0px 8px 0px #C2B6D4"}}
                                    >
                                    <a href="tel:+1647-223-1975" rel="noreferrer" className="" id="">Call for Consultation</a>
                                     </button>
                                 </div>




                            </div>
                        </div>
                </div>
                

            </div>

        </div>
    


    
    </div>
  )
}

export default ServiceCardSection