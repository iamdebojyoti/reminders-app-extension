import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MDBContainer } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import reportWebVitals from './reportWebVitals';
import Notes from './components/Notes';

const notes = [{title: "fsd", description: "sdfs"}, {title: "ds", description: "sdfsfds"}]

ReactDOM.render(
  <React.StrictMode>
    <MDBContainer>
      <Notes notes={notes}/>
    </MDBContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
