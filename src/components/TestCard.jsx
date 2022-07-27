import React from 'react'

function TestCard(props) {
  return (
    <div
    style={{ boxShadow:"0px 8px 0px #B3D4CE"}}
    className='lg:w-1/5 h-[23rem] rounded-[32.69px] inline-block bg-test bg-no-repeat  mx-4 bg-[#E6EAF2]  '
    >
         <svg className="testSvg   mt-6 ml-6" width="50" height="50" viewBox="0 0 50 50" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1390_3437)">
                                <path
                                    d="M17.3566 1.2133C18.5952 1.2133 20.4928 1.2988 23.0471 1.46144V10.9888C15.286 10.9888 11.4159 14.5795 11.4159 21.7568L11.541 26.0877H19.5815V48.8582H0.518555V24.234C0.52064 8.88478 6.13402 1.2133 17.3566 1.2133ZM49.5564 10.9908V1.46353C47.3356 1.30088 45.7676 1.21539 44.8563 1.21539C33.6358 1.21539 28.0266 8.88895 28.0266 24.2382V48.8624H47.0875V26.0919H39.0449L38.9218 21.7609C38.9114 14.9944 42.4625 11.4058 49.5564 10.9908Z"
                                    fill="#E6EAF2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1390_3437">
                                    <rect width="49.0378" height="49.0378" fill="white"
                                        transform="translate(0.519043 0.518921)" />
                                </clipPath>
                            </defs>
         </svg>
         <div className='whitespace-pre-line border-2  border-black mt-14 '>
            <p>{props.msg}</p>
            <p className="text-right">{props.name}</p>
        
           
        </div>
    </div>
  )
}

export default TestCard