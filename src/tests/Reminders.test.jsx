import { shallow } from "enzyme";
import Reminders from "../components/Reminders";

describe('Tesing <Reminders/> component', ()=> {

    let component;
    it('should match snapshot of Reminders', ()=> {
      component = shallow(<Reminders/>);
      expect(component.debug()).toMatchSnapshot();
    });
  });