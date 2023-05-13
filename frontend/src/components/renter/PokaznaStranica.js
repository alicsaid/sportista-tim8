import Button from 'react-bootstrap/Button';
import axios from 'axios';
function PokaznaStranica() {
    function getListaPitanje(){
        axios.get("http://127.0.0.1:8000/getUsers/")
            .then(response => {
                document.getElementById("zaIspis")
                    .innerHTML = response.data[0].fields.user_Firstname + " " + response.data[0].fields.user_lastName
                    + " " +
                     response.data[1].fields.user_Firstname + " " + response.data[1].fields.user_lastName
            })
    }
    return (
    <>
        <Button onClick={getListaPitanje}>Klikni na mene</Button>
        <p>Korisnici aplikacije su: </p>
        <p id={"zaIspis"}></p>
    </>
    );
}

export default PokaznaStranica;