import Button from 'react-bootstrap/Button';
import "./Basic.css";


export function Header(){
    return (
      <header className="container-fluid mb-5">
          <div className="row">
              <div className="col-4">
                  <a href="/">
                    <img src="favicon.png" className="small_logo"/>
                  </a>
              </div>
              <div className="offset-4 col-4">
                  <div className="d-flex justify-content-end">
                      <a href="/login"><Button className="m-4">Login</Button></a>
                      <a href="/register"><Button className="m-4">Sign up</Button></a>
                  </div>
              </div>
          </div>
      </header>
    );
}

export function Footer(){
    return (
        <footer className="text-center p-3">
            <a href="#">Login as admin</a>
        </footer>
    );
}