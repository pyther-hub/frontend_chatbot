# UI Basics

## Done:
- Layout and Basic desigining
- Textbox and button activity

## Remaining :
- Animations

## Used :
- MaterialUI
- TailwindCSS

## Brief Explanation

- components/chatarea.jsx- ChatArea(No Props) - It creates a holder to place the entire contents of chats and also gives a input box and button to send messages
- components/Navbar.jsx  - Classical MUI navigation bar
- components/message.jsx - Message(message) - Takes a message as object({text:message to be displayed,sender: bot or user}) and displays it in ChatArea
- components/initial.jsx - Initial(feeds,clickfeed) - displays the initial screen with logo and 4 buttons feeds=Array of objects ({message : message to be shown on feed}) clickfeed= function decides what to do when a feed is clicked.
- components/sendIcon.jsx - A send icon