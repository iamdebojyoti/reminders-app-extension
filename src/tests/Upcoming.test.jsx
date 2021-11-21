import { shallow } from "enzyme";
import Upcoming from "../components/Upcoming";

describe('Testing <Upcoming/> component', () => {

    let component, props;

    beforeEach(() => {
        props = {
            complete: jest.fn(),
            reminders: [{
                id: '1',
                name: 'Reminder-1',
                description: 'Reminder-desc-1',
                state: 'created'
            }, {
                id: '2',
                name: 'Reminder-2',
                description: 'Reminder-desc-2',
                state: 'created'
            }, {
                id: '3',
                name: 'Reminder-3',
                description: 'Reminder-desc-3',
                state: 'created'
            }],
        };
    });

    it('should match snapshot of Upcoming at initial state', () => {
        component = shallow(<Upcoming {...props}/>);
        expect(component.debug()).toMatchSnapshot();
    });

    it('should call done when complete button is clicked', () => {
        component = shallow(<Upcoming {...props}/>);
        component.find('#complete-2').simulate('click');
        component.update();
        expect(props.complete).toHaveBeenCalledWith("2");
    })
});