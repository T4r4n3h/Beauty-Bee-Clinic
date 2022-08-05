import React from 'react'
import ServiceItem from "./ServiceItem"


function SrvcCardMbl() {
  const services = [
    {
        name:"Neurotoxin Injection", 
        description:"Botox injections block certain chemical signals from nerves, mostly signals that cause muscles to contract. The most common use of these injections is to temporarily relax the facial muscles that cause wrinkles in the forehead and around the eyes.",
        img:"../../public/img/botox.png",
        price:"$8 - $10/unit", 
        duration:"30 minutes"
    },
    {
        name:"Derma Filler",
        description:"Dermal fillers are gel-like substances injected under the skin. Dermal fillers are meant to create a smoother or fuller appearance, or both.",
        img:"../../public/img/filler.png",
        price:"$500 - $600",
        duration:"60 minutes"
    },
    {
        name:"Chemical Peels", 
        description:"This is a technique used to improve the texture of the skin. It is intended to remove the outermost layer of the skin.To accomplish this task, the chosen  peel solution induces a controlled injury to the skin. Resulting wound healing processes begin to regenerate new tissues. The dead skin eventually peels off.",
        img:"../../public/img/chemPeel.png",
        price:"$100 - $150", 
        duration:"30 minutes"
    },
    {
        name:"Vitamine Injection", 
        description:"",
        img:"../../public/img/vitamineInjection.png",
        price:"", 
        duration:"30 minutes"
    },
    {   
        name:"Fat Dissolving Injections", 
        description:"Fat-dissolving treatment, also known as lipolytic injections, is a simple and non-invasive cosmetic procedure that uses injections to target fat deposits in the body. These injections use Deoxycholic acids, a synthetic form of naturally-occurring acids in the body.",
        img:"../../public/img/fatDesolving.png",
        price:"$650/vial",
        duration:"45 minutes"},
  ]
  return (
    <div className="SrvcCardMbl md:hidden flex flex-wrap justify-around">
       {services.map((srv)=> (<ServiceItem key= {srv.name} name={srv.name} description={srv.description} price={srv.price} duration={srv.duration} img={srv.img}/>))}

       
    </div>
  )
}

export default SrvcCardMbl