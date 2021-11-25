import { shallow } from "enzyme";
import CheckCircle from "../components/Icons/CheckCircle";
import CaretDown from "../components/Icons/CaretDown";
import Trash from "../components/Icons/CaretDown";

describe('Testing <Icons/> component', () => {

    let component;

    it('should match snapshot of CheckCircle icon', () => {
      component = shallow(<CheckCircle/>);
      expect(component.debug()).toMatchSnapshot();
    });

    it('should match snapshot of CaretDown icon', () => {
        component = shallow(<CaretDown/>);
        expect(component.debug()).toMatchSnapshot();
      });

      it('should match snapshot of Trash icon', () => {
        component = shallow(<Trash/>);
        expect(component.debug()).toMatchSnapshot();
      });
});