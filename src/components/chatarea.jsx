import React, { useContext, useEffect, useState } from 'react'
import Message from './message';
import { Box, Button, Grid, TextField } from '@mui/material';
import SendIcon from './sendIcon';
import Initial from './initial';
// import chatContext from '../context/chatcontext';

export default function ChatArea() {
  const [messages,setmessages]=useState([
    // {sender:"bot",text:"hello",time:Date()}
  ]);
  const feeds=[
    {message:"How does Pipeline support the concept of \"Pipeline-as-code\"?"},
    {message:"How does Pipeline support the concept of \"Pipeline-as-code\"?"},
    {message:"How does Pipeline support the concept of \"Pipeline-as-code\"?"},
    {message:"How does Pipeline support the concept of \"Pipeline-as-code\"?"},
  ]
  const clickfeed=(feed)=>{
    setmessages([...messages,{sender:"user",text:feed.message,time:Date()}])
  }
  useEffect(()=>{
    var objDiv = document.getElementById("messages");
    objDiv.scrollTop = objDiv.scrollHeight+100;
  },[messages]) 

    useEffect(()=>{
        console.log(messages);
    },[])
    const [input,setinput]=useState("");
    const handleInputChange=(event)=>{
      setinput(event.target.value)
      console.log(input);
    }    
    const handleSend=()=>{
      setmessages([...messages,{sender:"user",text:input,time:Date()}])
    }

  return (
    <div className='md:px-52'>
    <Box
      sx={{
        height: "110vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "grey.200",
        paddingBottom:0,
        // paddingX:"10"
        px:"100",
        background:"transparent"
      }}
    >

        <div id="messages" className='h-[75%] overflow-auto py-2'>
      {/* <Box sx={{ flexGrow: 1, overflow: "auto", p: 2, }}> */}
        {messages.length>0? messages.map((message) => (
          <Message  message={message} />
        )):<Initial feeds={feeds} clickfeed={clickfeed}/>}
      {/* </Box> */}
        </div>
      <Box sx={{ p: 1, backgroundColor: "transparent" }} >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              style={{height:"100",backgroundColor:"rgb(39, 39, 30) ",color:"white",borderRadius:"5px"}}
              sx={{ input: { color: 'white' } }}
              size="small"
              placeholder="Type a message"
              variant="outlined"
              value={input}
              onChange={handleInputChange}
      
            />
          </Grid>
          <Grid item xs={2} sx={{display:"flex", justifyContent:"center"}}>
            <Button
              fullWidth
              size="large"
              color="primary"
              variant="contained"
              // endIcon={}
              onClick={handleSend}
              style={{padding:0,backgroundColor:"black"}}
            >
              <SendIcon />
            </Button>
            {/* <RecordingArea onStop={onStop}/> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
    </div>
  );
}
