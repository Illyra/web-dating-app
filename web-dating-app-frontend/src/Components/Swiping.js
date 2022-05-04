import React from 'react'
import '../css/Swiping.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import RestoreIcon from '@mui/icons-material/Restore';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';


function Swiping() {
  return (
    <div className='Swiping'>
      <IconButton className='Swiping_Repeat'>
        <RestoreIcon fontSize = 'Large'/> 
      </IconButton>
      <IconButton className = 'Swiping_Left'>
        <HeartBrokenIcon fontSize = 'Large'/>
      </IconButton>
      <IconButton className = 'Swiping_Right'>
        <FavoriteIcon fontSize = 'Large'/>
      </IconButton>
      <IconButton className='Swiping_Star'>
        <StarIcon fontSize='Large'/>
      </IconButton>
      <IconButton className = 'Swiping_SuperLike'>
        <FlashOnIcon fontSize = 'Large'/>
      </IconButton>
    </div>
  );
}

export default Swiping