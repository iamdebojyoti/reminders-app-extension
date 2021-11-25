import { Button } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { CaretDown } from "./Icons";

const AccordionToggle = ({eventKey, variant}) => {
  const toggle = useAccordionButton(eventKey);

  return (
    <Button id={"acrdn-" + eventKey} className="float-end" variant={variant} onClick={toggle}>
        <CaretDown/>
    </Button>
  );
}

export default AccordionToggle;