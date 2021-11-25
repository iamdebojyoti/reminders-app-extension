import { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import Input from "./Input";
import Upcoming from "./Upcoming";
import Done from "./Done";

class Reminders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            remindersMap: new Map(),
            reminders: []
        }
        this.addReminder = this.addReminder.bind(this);
        this.complete = this.complete.bind(this);
        this.remove = this.remove.bind(this);
        this.upcoming = this.upcoming.bind(this);
        this.done = this.done.bind(this);
    }
    
    addReminder(reminder) {
        reminder.id = uuidv4();
        reminder.state = "CREATED";
        
        let currentReminders = this.state.remindersMap;
        currentReminders.set(reminder.id, reminder);
        this.setState({reminders: [...currentReminders.values()]});
    }

    complete(id) {
        let currentReminders = this.state.remindersMap;
        let reminder = currentReminders.get(id);
        reminder.state = "DONE";
        currentReminders.set(reminder.id, reminder);
        this.setState({reminders: [...currentReminders.values()]});
    }

    remove(id) {
        let currentReminders = this.state.remindersMap;
        currentReminders.delete(id);
        this.setState({reminders: [...currentReminders.values()]});
    }

    upcoming() {
        return this.state.reminders.filter(reminder => reminder.state === 'CREATED')
    }

    done() {
        return this.state.reminders.filter(reminder => reminder.state === 'DONE')
    }

    render() {
        return (
            <Tabs defaultActiveKey="input" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="input" title="Input">
                    <Input addReminder={this.addReminder}/>
                </Tab>
                <Tab eventKey="upcoming" title="Upcoming">
                    <Upcoming reminders={this.upcoming()} complete={this.complete}/>
                </Tab>
                <Tab eventKey="done" title="Done">
                    <Done reminders={this.done()} remove={this.remove}/>
                </Tab>
            </Tabs>
        );
    }
}

export default Reminders;