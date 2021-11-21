import PropTypes from "prop-types";
import { Accordion, Card, Button } from "react-bootstrap";
import { Trash } from "./Icons";
import AccordionToggle from "./AccordionToggle";

const Done = ({reminders, remove}) => {
  return (
    <>
      {reminders.map((reminder, idx) => {
        return (
          <Accordion defaultActiveKey="0">
            <Card
              bg={"success"}
              key={idx}
              text={"light"}
              className="mb-2"
            >
              <Card.Header>
                {reminder.name}
                <Button
                  id={"remove-"+reminder.id}
                  className="float-end"
                  variant="success"
                  onClick={() => remove(reminder.id)}
                >
                  <Trash />
                </Button>
                <AccordionToggle eventKey={idx} />
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

Done.propTypes = {
  remove: PropTypes.func.isRequired,
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    })
  ),
};

export default Done;
