import { Component } from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardText, MDBIcon, MDBRow, MDBCol } from 'mdbreact';

class Note extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            title : "",
            description: ""
        }
    }

    render() {
        const {note} = this.props;
        const isEditable = this.state.toggle;
        
        return (
            <MDBCard>
              <MDBCardHeader>
                <MDBRow>
                    <MDBCol size="11">{note.title}</MDBCol>
                    <MDBCol size="1">
                        <MDBBtn tag="a" size="sm" floating gradient="blue">
                            <MDBIcon icon="star" />
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBCardText>
                    {note.description}
                </MDBCardText>
            </MDBCardBody>
            </MDBCard>
        );
    }
}

export default Note;