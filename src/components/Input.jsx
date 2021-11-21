import { Component } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      added: false,
      valid: true,
      show: false,
    };
    this.save = this.save.bind(this);
  }

  save() {
    if (this.state.name === "" || this.state.description === "") {
      this.setState({ valid: false, show: true });
    } else {
      this.props.addReminder({
        name: this.state.name,
        description: this.state.description,
      });
      this.setState({
        name: "",
        description: "",
        added: false,
        valid: true,
        show: false,
      });
    }
  }

  render() {
    const isValid = this.state.valid;

    return (
      <>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="reminderNameGrp">
            <Col sm="12">
              <Form.Control
                id="reminderName"
                type="text"
                placeholder="Reminder Name"
                onChange={(val) => {
                  this.setState({ name: val });
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="reminderDescGrp">
            <Col sm="12">
              <Form.Control
                id="reminderDesc"
                as="textarea"
                placeholder="Description"
                onChange={(val) => {
                  this.setState({ description: val });
                }}
              />
            </Col>
          </Form.Group>

          <Col sm="12">
            <Button type="button" onClick={this.save}>
              Submit
            </Button>
          </Col>
        </Form>

        {!isValid && (
          <Alert
            variant="danger"
            onClose={() => this.setState({ show: false })}
            dismissible
          >
            <Alert.Heading>Input Error</Alert.Heading>
            <p>Inputs cannot be empty</p>
          </Alert>
        )}
      </>
    );
  }
}

Input.propTypes = {
  addReminder: PropTypes.func.isRequired,
};

export default Input;
