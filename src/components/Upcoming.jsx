import PropTypes from "prop-types";
import { Accordion, Card, Button } from "react-bootstrap";
import { CheckCircle } from "./Icons";
import AccordionToggle from "./AccordionToggle";

const Upcoming = ({reminders, complete}) => {

  const backgroundVariant = (idx) => {
    if(idx % 2 == 0) {
      return "light"
    } else {
      return "dark"
    }
  };

  const textVariant = (idx) => {
    if(idx % 2 == 0) {
      return "dark"
    } else {
      return "light"
    }
  };

  return (
    <>
      {reminders.map((reminder, idx) => {
        return (
          <Accordion defaultActiveKey="0" key={idx}>
            <Card
              bg={backgroundVariant(idx)}
              key={idx}
              text={textVariant(idx)}
              className="mb-2"
            >
              <Card.Header>
                {reminder.name}
                <Button
                  id={"complete-"+reminder.id}
                  className="float-end"
                  variant={backgroundVariant(idx)}
                  onClick={() => complete(reminder.id)}
                >
                  <CheckCircle />
                </Button>
                <AccordionToggle eventKey={idx} variant={backgroundVariant(idx)}/>
              </Card.Header>
              <Accordion.Collapse eventKey={idx}>
                <Card.Body>
                  <Card.Text>{reminder.description}</Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </>
  );
};

Upcoming.propTypes = {
  complete: PropTypes.func.isRequired,
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    })
  ),
};

export default Upcoming;
