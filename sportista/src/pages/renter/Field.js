import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Field() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../resources/images/teren1.jpg')} alt={"teren"} />
            <Card.Body>
                <Card.Title>Name of Field</Card.Title>
                <Card.Text>
                    This is a football field...
                </Card.Text>
                <Card.Text>
                    Price: 50$
                    Reserved until?
                </Card.Text>
                <Button variant="outline-secondary" style={{margin: '5px'}}>Edit field</Button>
                <Button variant="outline-danger">Delete field</Button>
            </Card.Body>
        </Card>
    );
}

export default Field;