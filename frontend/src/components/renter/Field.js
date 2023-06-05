import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

/* components */
import EditFieldModal from "./EditFieldModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import axios from "axios";
import {SERVER_URL} from "../../auth/Consts";

function Field(props) {


    return (
        <div className="cardContainer mt-5">
            <div className="cardRow">
                {props.fields.map((field) => (
                    <Card key={field.pk} style={{ width: '18rem', marginTop: "5rem" }}>
                        <Carousel showThumbs={false}>
                            {field.fields.images.split("SPLIT").map((image) => (
                                <div>
                                    <img src={image} alt="Field photo" />
                                </div>
                            ))}
                        </Carousel>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {field.fields.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {field.fields.details}
                            </Typography>
                            <Divider className="mt-3 mb-3" />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Price: {field.fields.price}
                            </Typography>
                            <Divider className="mt-3 mb-3" />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Location: {field.fields.address}
                            </Typography>
                            <Divider className="mt-3 mb-3" />
                            <Button>
                                <EditFieldModal field_id={field.pk} getf={props.getf} />
                            </Button>
                            <Button>
                                <DeleteConfirmationModal field_id={field.pk} getf={props.getf} />
                            </Button>
                            <Divider className="mt-3 mb-3" />
                            <Typography component="span" >LOCK FIELD:</Typography>
                            {field.fields.lock &&
                                <Switch  defaultChecked={true} onChange={(event, checked) => {axios.post(`${SERVER_URL}/renter/lock_field/${field.pk}/${checked ? 1 : 0}/`)}} />
                            }
                            {!field.fields.lock &&
                                <Switch onChange={(event, checked) => {axios.post(`${SERVER_URL}/renter/lock_field/${field.pk}/${checked ? 1 : 0}/`)}} />
                            }
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Field;