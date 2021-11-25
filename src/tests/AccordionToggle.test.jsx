import { shallow } from "enzyme";
import AccordionToggle from "../components/AccordionToggle";

describe('Testing <AccordionToggle/> component', () => {

    let component;

    it('should match snapshot of AccordionToggle', () => {
      component = shallow(<AccordionToggle eventKey="1" variant="success"/>);
      expect(component.debug()).toMatchSnapshot();
    });
});