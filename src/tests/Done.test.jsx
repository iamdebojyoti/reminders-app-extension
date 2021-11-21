import { shallow } from "enzyme";
import Done from "../components/Done";

describe('Testing <Done/> component', () => {

    let component, props;

    beforeEach(() => {
        props = {
            remove: jest.fn(),
            reminders: [{
                id: '1',
                name: 'Reminder-1',
                description: 'Reminder-desc-1',
                state: 'created'
            }, {
                id: '2',
                name: 'Reminder-2',
                description: 'Reminder-desc-1',
                state: 'created'
            }],
        };
    });

    it('should match snapshot of Done at initial state', () => {
        component = shallow(<Done {...props}/>);
        expect(component.debug()).toMatchSnapshot();
    });

    it('should call done when trash button is clicked', () => {
        component = shallow(<Done {...props}/>);
        component.find('#remove-2').simulate('click');
        component.update();
        expect(props.remove).toHaveBeenCalledWith("2");
    })
});