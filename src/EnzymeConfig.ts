import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

let EnzymeConfig = ()=>{configure({ adapter: new Adapter() })};
// test file
export default EnzymeConfig;