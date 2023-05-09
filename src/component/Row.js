import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState,useEffect } from 'react';
export default function FullBorderedGrid() {
  
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://www.melivecode.com/api/attractions")
          .then(res => res.json())
          .then(
            (result) => {
           
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
        
          )
      }, [])
    
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
          {items.map(item => (
           <Grid key={item.id} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} minHeight={160} >
 <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.coverimage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
           </Grid>
        ))}
      </Grid>
    </Box>
  );
}