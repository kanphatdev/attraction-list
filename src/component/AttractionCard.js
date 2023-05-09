import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function AttractionCard() {
  
 
  const [attractions, setAttraction] = useState([]);

  useEffect(() => {
    fetch("https://www.melivecode.com/api/attractions")
      .then(res => res.json())
      .then(
        (result) => {
        
          setAttraction(result);
        },
      
       
      )
  }, [])


    return (
      <>
        {attractions.map(item => (
          
          <Card sx={{ maxWidth: 345 }}  key={item.id}>
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
        ))}
      </>
    );
  }

export default AttractionCard;