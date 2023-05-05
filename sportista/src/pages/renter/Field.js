import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditFieldModal from './EditFieldModal';
import {useState} from "react";


function Field() {
    const text = "This is a footbal field. Hahaha there is more info about this field isnt it cool?";
    const [showMore, setShowMore] = useState(false);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../../resources/images/teren1.jpg')} alt={"teren"} />
            <Card.Body>
                <Card.Title>Name of Field</Card.Title>
                <Card.Text>
                    {showMore ? text : `${text.substring(0, 50)}`+'...'}
                    <button style={{padding: "2px", border:"none", background:"none", fontSize:"13px", color:"gray"}} onClick={()=>setShowMore(!showMore)}>
                        {showMore ? "Show less" : "Show more"}
                    </button>
                </Card.Text>
                <Card.Text>
                    Price: 50$
                    Reserved until?
                </Card.Text>
                <EditFieldModal />
                <Button variant="outline-danger">Delete field</Button>
            </Card.Body>
        </Card>
    );
}

export default Field;