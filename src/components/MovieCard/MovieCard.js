import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './style.css'
const MovieCard = (props)=>{
    return <div>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
          component="img"
          className="card-thumbnail"
          height="225"
          image={props?.items['poster-image'] !== "posterthatismissing.jpg" ? `https://test.create.diagnal.com/images/${props?.items['poster-image']}`:"https://test.create.diagnal.com/images/placeholder_for_missing_posters.png"} 
          alt={props?.items?.name}
        />
        </CardActionArea>
        <span className="movie-name">{props?.items?.name}</span>
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
          </Typography>
        </CardContent> */}
        </Card>
       {/*  <img style={{"width":"100%"}} src={`https://test.create.diagnal.com/images/${props?.items['poster-image']}`} alt={props?.items?.name} />
        <span>{props?.items?.name}</span> */}
    </div>
}
export default MovieCard