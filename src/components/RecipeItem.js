import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const RecipeItem = ({ recipe, onSelect }) => (
  <Card 
		onClick={() => onSelect(recipe)} 
		sx={{  
				border: '5px solid #FFD700', 
				backgroundColor: '#FFD700', 
				padding: '8px',
				borderRadius: '2px',
				'&:hover': {
				backgroundColor: '#FFC107',
				}
			}}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        alt={recipe.recipe.label}
        height="160"
        image={recipe.recipe.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {recipe.recipe.label}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default RecipeItem;
