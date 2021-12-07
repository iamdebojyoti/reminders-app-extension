import { Component } from "react";
import Note from "./Note";

class Notes extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const {notes} = this.props
        console.log(notes)
        
        return (
            <>
              {notes.map((note, idx) => {
                return (
                  <>
                    <Note key={idx} note={note}/>
                    <br/>
                  </>
                );
              })}
            </>
        );
    }
}

export default Notes;