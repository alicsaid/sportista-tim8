import "../../pages/user/User.css";
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import FieldDetailsModal from "./FieldDetailsModal";
import BookFieldModal from "./BookFieldModal";


function FieldCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={require('../../resources/images/teren1.jpg')}
                alt="Field"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Field Name
                </Typography>
            </CardContent>
            <CardActions className="d-flex justify-content-between">
                <BookFieldModal />
                <FieldDetailsModal />
            </CardActions>
            <CardActions className="float-end" disableSpacing>
                <Typography component="span">4.5/5 </Typography>
                <StarIcon color="primary" fontSize="small" />
            </CardActions>
        </Card>
    );
}

export default FieldCard;