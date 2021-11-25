import { shallow } from "enzyme";
import Input from "../components/Input";

describe('Testing <Input/> component', () => {

    let component, props;

    beforeEach(() => {
        props = {
          addReminder: jest.fn(),
        };
    });

    it('should match snapshot of Input at initial state', () => {
      component = shallow(<Input {...props}/>);
      expect(component.debug()).toMatchSnapshot();
    });

    it('should match snapshot of Input when submit is clicked and no inputs are provided', () => {
        component = shallow(<Input {...props}/>);
        component.find('Button').simulate('click');
        component.update();
        expect(component.debug()).toMatchSnapshot();
    });

    it('should match snapshot of Input after submit is clicked when inputs are provided', () => {
        component = shallow(<Input {...props}/>);
        component.find('#reminderName').simulate('change', {target:{value:'Reminder 1'}});
        component.find('#reminderDesc').simulate('change', {target:{value:'Reminder 1 Desc'}});
        component.find('Button').simulate('click');
        component.update();
        expect(component.debug()).toMatchSnapshot();
    });

    it('should be able to add reminder when inputs are provided', () => {
        component = shallow(<Input {...props}/>);
        component.find('#reminderName').simulate('change', {target:{value:'Reminder 1'}});
        component.find('#reminderDesc').simulate('change', {target:{value:'Reminder 1 Desc'}});
        component.find('Button').simulate('click');
        component.update();
        expect(props.addReminder).toHaveBeenCalledWith({
            name: 'Reminder 1',
            description: 'Reminder 1 Desc'
        });
    });

    it('should not be able to add reminder when inputs are empty', () => {
        component = shallow(<Input {...props}/>);
        component.find('Button').simulate('click');
        component.update();
        expect(component.state('valid')).toBe(false);
    });
    
  });