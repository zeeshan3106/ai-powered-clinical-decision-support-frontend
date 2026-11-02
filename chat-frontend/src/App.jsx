import React, { useState,useEffect, useRef  } from 'react'
import './App.css'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { TiThMenuOutline } from "react-icons/ti";
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import { CSSProperties } from "react";
import { BeatLoader } from "react-spinners";
import { GrAdd } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import Button from '@mui/material/Button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';






const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};  


function App() {

  // const cleanMarkdown = (text = "") =>
  // text.replace(/\*\*\s+/g, "**")
  // .replace(/\s+\*\*/g, "**")
  //   .replace(/\\+\*{3,}/g, "**") 
  //   .replace(/\*{3,}/g, "**")    
    // .replace(/\*\*\s+/g, "**")    // Remove spaces after opening **
    

const [started, setStarted] = useState(false);
   const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['New Chat', 'Recent', 'Subscriptions', 'Search'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['API', 'Profile', 'Settings'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Button
        variant="contained"
        color="error"
        fullWidth
        sx={{ fontWeight: 'bold' }}
        onClick={(e) => {
          e.stopPropagation();
          OnDelte();
          setOpen(false)
        }}
      >
        Delete Chat
      </Button>
    </Box>
    </Box>
  );





const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
 
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };


const [loadings, setLoadings] = useState(true);
  const [color, setColor] = useState("#ffffff");

//   const makeLinksClickable = (text) => {
//   const urlRegex = /(https?:\/\/[^\s]+)/g

//   return text.split(urlRegex).map((part, index) => {
//     if (part.match(/^https?:\/\//)) {
//       return (
//         <a
//           key={index}
//           href={part}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 underline break-all"
//         >
//           {part}
//         </a>
//       )
//     }

//     return part
//   })
// }
const makeLinksClickable = (text) => {
  const safeText = String(text ?? "");
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return safeText.split(urlRegex).map((part, index) => {
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
      );
    }

    return part;
  });
};

 

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




useEffect(()=>{
  axios.get('https://com-usa-backend.vercel.app/api/form/health-get').then(res =>{
    setstate(
  res.data.data.map(item => ({
    Name: item.name,
    Message: item.message
  }))
);
  
    
  }).catch(err => err)

  



},[])


const OnDelte = ()=>{
  axios.delete('https://com-usa-backend.vercel.app/api/form/health-chat-delete').then(res => res).catch(err => err)
    setstate([]);
    setSuccess(false)
    setLoading(false)
}


const model = async () => {

  const item = res


  if (!item) {
    toast.error("Enter a value");
    return;
  }

  setLoading(true);
  setSuccess(false);
  setStarted(true);
 


    const response = await fetch(
      'https://com-usa-backend.vercel.app/api/form/health-post',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          message: item
        })
      }
    );






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
      'https://ai-powered-clinical-decision-suppor.vercel.app/get',
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
       toast.error('Unable to get a response from the server.');
    }

    if (!response.body) {
      throw new Error('Streaming response is unavailable')
       toast.error('Unable to get a response from the server.');
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
let fullMessage = "";
    // while (true) {
    //   const { value, done } = await reader.read()

    //   if (done) break

    //   const chunk = decoder.decode(value, { stream: true })

    //   setstate(prev => {
    //     const updated = [...prev]
    //     const lastIndex = updated.length - 1

    //     updated[lastIndex] = {
    //       ...updated[lastIndex],
    //       Message: updated[lastIndex].Message + chunk
    //     }

    //     return updated
    //   })
    // }
    while (true) {
    const { value, done } = await reader.read();

    if (done) break;

    const chunk = decoder.decode(value, { stream: true });

    fullMessage += chunk;

    setstate(prev => {
        const updated = [...prev];
        const lastIndex = updated.length - 1;

        updated[lastIndex] = {
            ...updated[lastIndex],
            Message: updated[lastIndex].Message + chunk
        };

        return updated;
    });
}

    const remaining = decoder.decode()
   
 fullMessage += remaining;

    const saveResponse = await fetch(
    'https://com-usa-backend.vercel.app/api/form/health-post',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
        
                {
                    name: 'AI Message',
                    message: fullMessage
                }
    
      )
    }
);
setSuccess(true);
    setLoading(false);
const result = await axios.get(
  'https://com-usa-backend.vercel.app/api/form/health-get'
);

setstate(
  result.data.data.map(item => ({
    Name: item.name,
    Message: item.message
  }))
);
  
  


    
  

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
  finally {
     setSuccess(true);
    setLoading(false);
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
    setSuccess(false)

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
      <div className=' sidebaricon '>
        <div>
      
       <Button  sx={{
    minWidth: 32,
    width: 32,
    padding: 0,
    fontSize: 20
  }}
onClick={toggleDrawer(true)}><TiThMenuOutline className=' ' /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      </div>



      </div>
         <div className='font-bold flex justify-center p-5 text-[30px]'>
        Disease Detection
      </div>


       <div>
     
    </div>
      <div>




      </div>


      <div>
       
          <div className="fixed bottom-0 left-0 w-full bg-white p-3 shadow-lg flex justify-center items-center z-50">
              <IconButton
    aria-label="Add"
    color="secondary"
      className="translate-y-[3px]"
    sx={{ width: 44, height: 44, flexShrink: 0 }}
  >
    <GrAdd className="text-gray-500"  />
  </IconButton>
     <input type='text' className='shadow-md w-[80%] h-[50px] p-5 searchbar  ' placeholder='Ask Anything...'
      value ={res}
     onChange={OnChangeSearch}
       onKeyDown={(e) => {
    if (e.key === 'Enter' && !e.shiftKey ) {
      e.preventDefault()
      if (e.target.value.trim() !== "") {
         setLoading(true);
  setSuccess(false);
      model();
    } else {
      toast.error("Enter a value");
    }
    }
    
  }}

     
     ></input>
    <button className='translate-y-1' onClick={model}>

        <Box sx={{ display: 'flex', alignItems: 'center' }} >
      <Box sx={{ m: 1, position: 'relative' }}>
     <Fab
  aria-label={
    loading ? "Generating response" : success ? "Sent successfully" : "Send message"
  }
  color="inherit"
  disabled={loading}
  sx={{
    ...buttonSx,
    width: 40,
    height: 40,
    minHeight: 40,
    boxShadow: "none",
      bgcolor: "black",
       color: "white",
  }}
>
  {loading ? (
    <CircularProgress size={22} sx={{ color: "white" }} />
  ) : success ? (
    <CheckIcon />
  ) : (
    <GrFormNextLink className="text-[29px]" />
  )}
</Fab>

        
     


      </Box>
    
    </Box>
    
        </button>

  <Toaster />
</div>
     {!started && state.length === 0 && (
  <div className="welcome-screen">
   <h1 className='"welcome-title'>  Welcome To Health Support!</h1>
<p>How can I help you Today?</p>
  </div>
)}
       
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
        ? 'bg-[#D9FDD3] p-5 shadow-md sender w-[40%] break-words overflow-wrap-anywhere pcwidth mobile-sender user-message '
        : 'bg-white receiever p-8 shadow-md   w-[40%] break-words overflow-wrap-anywhere pcwidth Response mobile-rec'

}>
 {item.Name === "AI Message" && loading && !item.Message ? (
  // <BeatLoader
  //   // color="#9ca3af"
  //     color="#36d7b7"
  //   size={8}
  //   margin={3}
  //   speedMultiplier={1}
  // />

  <div className="multi-loader">
    <span></span>
    <span></span>
    <span></span>
  </div>


) : (
         <ReactMarkdown remarkPlugins={[remarkGfm]}   components={{
    a: ({ href, children, ...props }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline break-all "
        {...props}
      >
        {children}
      </a>
    )
  }}>
     {item.Message || ""}
  </ReactMarkdown>
)}
      
      </div>

        
      </div>


))}
  
   </div>     </div>

     
      
    </div>




  )
}

export default App