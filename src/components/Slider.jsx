import React from 'react'
import TestCard from './TestCard'
function Slider() {
    const slidess = [1,2,3,4,5]
    const slides =[
      
      {id:1, name: '"Jenn"', msg:'I just wanted to say thank you! I have had no bruising and results so far are amazing'},
      {id:2, name: '"Shilah"', msg:'I saw you on Monday 😊	I did not bruise. The swelling has gone down and I love the work you did!!! I am so happy with the outcome. You literally perfected the look I wanted I will definitely be booking with you again'},
      {id:3, name: '"Min"', msg:'I really love it! I keep looking at it;) Very light but I notice and I really like '},
      {id:4, name: '', msg:''},
      {id:5, name: '', msg:''},
      {id:6, name: '', msg:''},
    ]

  return (
    <div className='Slider-container h-[25rem] flex justify-center items-center '>
      <div className="left "><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
</svg></div>  
      <div className="slider mb-2 w-full h-full whitespace-nowrap overflow-x-scroll  ">
      {slides.map((card)=> (<TestCard key={card.id} name={card.name} msg={card.msg}/>))}
      
      </div>
      <div className="right"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg></div>
    </div>
  )
}

export default Slider