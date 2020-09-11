import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button className="accordion"  onClick={toggle} >{props.title} &nbsp;<FontAwesomeIcon icon={faPlus}/></Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {props.desc}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Accordion;