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


-components/chatarea.jsx - ChatArea (No Props) - This component serves as a container for displaying all chat contents. It includes an input box and button for sending messages.

-components/Navbar.jsx - A classical MUI navigation bar.

-components/message.jsx - Message (message) - This component takes a message object ({text: message to display, sender: bot or user}) and renders it within the ChatArea.

-components/initial.jsx - Initial (feeds, clickfeed) - This component displays the initial screen featuring a logo and four buttons. feeds is an array of objects ({message: message to display on feed}), while clickfeed is a function that determines the action when a feed is clicked.

-components/sendIcon.jsx - An icon for sending messages.
