import React, { useState } from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';


const App = (props)=> {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="container min-vh-100">

      <div className="row">
        <div></div>
        <div className="col-12 mt-5 d-flex justify-content-center">
        <Button size="lg" onClick={toggle}>Check In</Button></div>
        <div className="col-12 mt-5 d-flex justify-content-center"><Button  size="lg">Say GoodBye</Button></div>
      </div>


      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Covid-19 Tracer</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input type="text" name="Naam" id="Naam" placeholder="Naam" />
          </FormGroup>
          <FormGroup>
            <Label for="nationalNumber" hidden>National Number</Label>
            <Input type="number" name="nationalNuùmber" id="National Number" placeholder="Rijksregisternummer" />
          </FormGroup>
          <FormGroup>
          <Input type="text" name="email" id="Email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
          <Input type="number" name="GSM-Nummer" id="GSM-Nummer" placeholder="GSM-Nummer" />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

    </div>
  );
}

export default App;
