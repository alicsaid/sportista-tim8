import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function VenueCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../resources/images/teren1.jpg')} alt={"teren"} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default VenueCard;