import React from 'react';
import './Headers.css';
import PersonIcon from "@mui/icons-material/Person";
import IconButton from '@mui/material/IconButton'
import ChatIcon from '@mui/icons-material/Chat';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link, useNavigate } from 'react-router-dom'; 

function Headers({backout}) {
  const browseHistory = useNavigate();
    return (
        <div className = "header">
        {backout ? (
          <IconButton onClick={() => browseHistory(backout, {replace: true})}>
              <KeyboardDoubleArrowLeftIcon fontSize='large' className='Person_Icon' />
          </IconButton>
        ) : (
          <IconButton>
            <PersonIcon fontSize='large' className ="Person_Icon" />
          </IconButton>
        )}

          <Link to = '/Main'>
            <img
              className='header_logo'
              src = "Bonjour-logos_transparent.png"
              alt = ""
              />
          </Link>
          
          <Link to = '/chat'>
            <IconButton>
              <ChatIcon fontSize='large' className = "Chat_Icon" />
            </IconButton>
          </Link>
        </div>
    );
}

export default Headers;