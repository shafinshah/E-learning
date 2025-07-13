            import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Course({course}){
 
       


  return (
    <a href={`/Course/${course._id}`}>
    <div className="Course">
  
    <Card sx={{width:340}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={course.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
{course. title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {course.description}
        </Typography>
       
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <br></br> <br></br>
         Price :{course.price} &#8377;
        </Typography>
      </CardContent>
      <CardActions>
       

      </CardActions>
    </Card>

    </div>
   </a>
  );
}

    
