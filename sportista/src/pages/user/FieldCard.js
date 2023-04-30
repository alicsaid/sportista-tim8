import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';

function FieldCard() {
    const ratingValue = 4;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../resources/images/teren1.jpg')} alt={"teren"} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
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