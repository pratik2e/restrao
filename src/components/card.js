

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import restaurants from './data.json';

export default function OutlinedCard() {
  const { name, id, rating, location } = restaurants[0];

  return (
    <div className='mt-8 mb-8 rounded-lg bg-blend-normal container '>
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography>
            ID: {id}
          </Typography>
          <Typography>
            Rating: {rating} stars
          </Typography>
          <Typography>
            Location: {location}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </Box>
    </div>
  );
}