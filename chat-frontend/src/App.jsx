import React, { useState,useEffect, useRef  } from 'react'
import './App.css'
import Button from '@mui/material/Button';

import { GrFormNextLink } from "react-icons/gr";

function App() {





  const makeLinksClickable = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g

  return text.split(urlRegex).map((part, index) => {
    if (part.match(/^https?:\/\//)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline break-all"
        >
          {part}
        </a>
      )
    }

    return part
  })
}


 

  const list = []

  const [state,setstate]=useState(list)

  const name = "Zeeshan"


  // const model = ()=>{
  // const item = prompt("Enter a value")
  // setstate(prev => [
  //     ...prev,
  //     {
  //       Name: name,
  //       Message: item
  //     }
  //   ])

  //   const payload = item

  //   axios.post('https://restaurant-ai-agent-nine.vercel.app/Agent',payload).then(
  //  (res) => {
  //   console.log(res.data)

  //    setstate(prev => [
  //     ...prev,
  //     {
  //       Name: "AI Message",
  //       Message: res.data
  //     }
  //   ])
    
  // }
  //   ).catch(err => err)

  // }

const model = async () => {
  const item = res

  if (item === null || !item.trim()) return

  setstate(prev => [
    ...prev,
    { Name: name, Message: item },
    { Name: 'AI Message', Message: '' }
  ])
  setTimeout(() => {
  userMessageRef.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}, 100)
 setres('')
  try {
    const response = await fetch(
      'https://restaurant-ai-agent-nine.vercel.app/Agent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      }
    )
     
    if (!response.ok) {
      throw new Error('Server request failed')
    }

    if (!response.body) {
      throw new Error('Streaming response is unavailable')
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()

    while (true) {
      const { value, done } = await reader.read()

      if (done) break

      const chunk = decoder.decode(value, { stream: true })

      setstate(prev => {
        const updated = [...prev]
        const lastIndex = updated.length - 1

        updated[lastIndex] = {
          ...updated[lastIndex],
          Message: updated[lastIndex].Message + chunk
        }

        return updated
      })
    }

    const remaining = decoder.decode()
  

    if (remaining) {
      setstate(prev => {
        const updated = [...prev]
        const lastIndex = updated.length - 1

        updated[lastIndex] = {
          ...updated[lastIndex],
          Message: updated[lastIndex].Message + remaining
        }

        return updated
      })
    }
  } catch (err) {
    console.error('SERVER:', err)
  }
}



  
   const lastMessageRef = useRef(null)
   const userMessageRef = useRef(null)

useEffect(() => {
  lastMessageRef.current?.scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  })
}, [state])

const [res,setres]=useState('')

   const OnChangeSearch=(e) => {
   
    setres(e.target.value)

  }

    console.log(res)

  // localStorage.setItem('Name',name)
const ClickButn = () => {
  const item = prompt('Enter item')
  const name = localStorage.getItem('Name') || 'Zeeshan'

  if (item !== null && item.trim() !== '') {
    setstate(prev => [
      ...prev,
      {
        Name: name,
        Message: item
      }
    ])
  }
}

  return (
    <div>
      <div className='font-bold flex justify-center p-5 text-[30px]'>
        Restaurant Agent
      </div>
      <div>
       
          <div className="fixed bottom-0 left-0 w-full bg-white p-3 shadow-lg flex justify-center z-50">
     <input type='text' className='shadow-md w-[80%] h-[50px] p-5 searchbar  ' placeholder='Enter value'
      value ={res}
     onChange={OnChangeSearch}
       onKeyDown={(e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      model()
    }
  }}

     
     ></input>
  <button className="submit" onClick={model}>
      Submit
  </button>
</div>
     
       
<div className='pb-35'>   
{
  state.map((item,index)=>(
    

      <div

         key={index}
    ref={
  index === state.length - 2
    ? userMessageRef
    : index === state.length - 1
    ? lastMessageRef
    : null
}
      
      className={
    item.Name === name
        ? ' flex justify-end '
        : ' flex justify-start mobile-ai'

}>


<div className={
   item.Name === name
        ? 'bg-[#D9FDD3] p-5 shadow-md sender w-[40%] break-words overflow-wrap-anywhere pcwidth mobile-sender'
        : 'bg-white receiever p-8 shadow-md   w-[40%] break-words overflow-wrap-anywhere pcwidth Response mobile-rec'

}>
  {makeLinksClickable(item.Message)}
      
      </div>

        
      </div>


))}
  
   </div>     </div>

     
      
    </div>




  )
}

export default App