import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Container } from 'react-bootstrap';
import Upcoming from './components/Upcoming';

const reminders = [{
  name: 'Reminder-1',
  description: 'Reminder-desc-1',
  state: 'created'
}, {
  name: 'Reminder-2',
  description: 'Reminder-desc-1',
  state: 'created'
}]

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Upcoming reminders={reminders}/>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
