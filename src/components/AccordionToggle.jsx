import { Button } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { CaretDown } from "./Icons";

const AccordionToggle = ({eventKey}) => {
  const toggle = useAccordionButton(eventKey);

  return (
    <Button id={"acrdn-" + eventKey} className="float-end" variant="primary" onClick={toggle}>
        <CaretDown/>
    </Button>
  );
}

export default AccordionToggle;