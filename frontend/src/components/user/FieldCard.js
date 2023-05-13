import "./User.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import {useState} from "react";

function FieldCard() {
    const ratingValue = 4;
    const text = "Nedim you are wrong! This is NOT a footbal field. Hahaha there is more info about this field isnt it cool?";
    const [showMore, setShowMore] = useState(false);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../resources/images/teren1.jpg')} alt={"teren"} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {showMore ? text : `${text.substring(0, 50)}`+'...'}
                    <button className="showMoreButton" onClick={()=>setShowMore(!showMore)}>
                        {showMore ? "Show less" : "Show more"}
                    </button>
                </Card.Text>
                <Button className="float-end" variant="primary">Details</Button>
            </Card.Body>
            <Card.Footer>
                <div className="float-end">
                    <span>4.5/5 </span>
                    <FaStar
                        color={"#ffc107"}
                        size={20}
                    />
                </div>
            </Card.Footer>
        </Card>
    );
}

export default FieldCard;