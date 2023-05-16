import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Forma(props) {
    return (
        <Form>
            <Form.Group className="mb-1" controlId="formBasicSport">
                <Form.Label>Sport</Form.Label>
                <Form.Control type="text" placeholder="Enter sport"/>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name"/>
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter location" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price"/>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicImg">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" placeholder="Enter Image"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
                {props.dodaj}
            </Button>
        </Form>
    );
}

export default Forma;