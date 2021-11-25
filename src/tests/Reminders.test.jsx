import { shallow } from "enzyme";
import Reminders from "../components/Reminders";

describe('Testing <Reminders/> component', ()=> {

    let component;
    it('should match snapshot of Reminders', ()=> {
      component = shallow(<Reminders/>);
      expect(component.debug()).toMatchSnapshot();
    });

    it('should be able to add reminders', () => {
      component = shallow(<Reminders/>);
      component.instance().addReminder({name:"Name1", desc: "Desc1"});
      
      const state = component.state('remindersMap');
      const [reminder] = state.values();
      
      expect(reminder.name).toBe("Name1");
      expect(reminder.desc).toBe("Desc1");
      expect(reminder.state).toBe("CREATED");
    });

    it('should be able to add multiple reminders', () => {
      component = shallow(<Reminders/>);
      component.instance().addReminder({name:"Name1", desc: "Desc1"});
      component.instance().addReminder({name:"Name2", desc: "Desc2"});
      
      const state = component.state('remindersMap');
      const [reminder1, reminder2] = state.values();
      
      expect(reminder1.name).toBe("Name1");
      expect(reminder1.desc).toBe("Desc1");
      expect(reminder1.state).toBe("CREATED");

      expect(reminder2.name).toBe("Name2");
      expect(reminder2.desc).toBe("Desc2");
      expect(reminder2.state).toBe("CREATED");
    });

    it('should be able to complete a reminder', () => {
      component = shallow(<Reminders/>);
      component.instance().addReminder({name:"Name1", desc: "Desc1"});
      component.instance().addReminder({name:"Name2", desc: "Desc2"});
      
      const state = component.state('remindersMap');
      const [reminder1, reminder2] = state.values();
      
      component.instance().complete(reminder1.id);
      expect(reminder1.name).toBe("Name1");
      expect(reminder1.desc).toBe("Desc1");
      expect(reminder1.state).toBe("DONE");

      expect(reminder2.name).toBe("Name2");
      expect(reminder2.desc).toBe("Desc2");
      expect(reminder2.state).toBe("CREATED");
    });

    it('should be able to remove a reminder', () => {
      component = shallow(<Reminders/>);
      component.instance().addReminder({name:"Name1", desc: "Desc1"});
      component.instance().addReminder({name:"Name2", desc: "Desc2"});
      
      const state = component.state('remindersMap');
      const [reminder1] = state.values();
      
      component.instance().remove(reminder1.id);
      expect(state.size).toBe(1);
    });

  });