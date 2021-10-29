import { React, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap/';
import { SocialIcon } from 'react-social-icons';


function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="me-2">
        Contact Me
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{fontSize:"28px"}}>Contact Me</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SocialIcon style={{margin:"10px", height: 75, width: 75 }} url="mailto:christolnai@gmail.com" network="mailto" bgColor="rgb(29, 119, 157)"/>
          <SocialIcon style={{margin:"10px", height: 75, width: 75 }} url="https://www.linkedin.com/in/christolnai/" network="linkedin" target="_blank" bgColor="rgb(29, 119, 157)"/>
          <SocialIcon style={{margin:"10px", height: 75, width: 75 }} url="https://github.com/ctolnai" network="github" target="_blank" bgColor="rgb(29, 119, 157)"/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Footer() {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Footer;