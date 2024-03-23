import { Box, Paper, Typography } from '@mui/material';
import React from 'react'

export default function Message({message}) {
    const isBot = message.sender === "bot";
    const userImg="https://miro.medium.com/v2/resize:fit:256/0*53IMJuxegJgIl7mC.png";
    const jenkisImg="https://miro.medium.com/v2/resize:fit:256/0*53IMJuxegJgIl7mC.png";
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent:  "flex-start" ,
          mb: 1,
        //   height:"48%",
          minWidth:"40%",
          textAlign:"center",
          // borderLeftWidth:"50px",
          // borderRightWidth:"50px",
          // borderBottomWidth:"100px",
        }}
      >
        <div className={`mx-${isBot?"0":"10"} w-16 p-${isBot?"0":"3"} flex justify-around`}><img src={`${isBot?jenkisImg:userImg}`} alt="" className={`h-${isBot?"16":"10"} rounded-full`}/></div>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            paddingTop:1,
            backgroundColor: isBot ? "primary.light" : "secondary.light",
            borderRadius: isBot ? "20px 20px 20px 20px" : "20px 20px 20px 20px",
            maxWidth:"80%",
          }}
          style={{background:"transparent"}}
        >
          {/* <div style={triangleStyle}></div> */}
          <div className='p-0 pb-2 text-s w-full font-bold text-left'>{isBot?"Jenkis":"You"}</div>
          <Typography variant="body1" style={{textAlign:'left'}}>{message.text}</Typography>
        </Paper>
      </Box>
    );
}
