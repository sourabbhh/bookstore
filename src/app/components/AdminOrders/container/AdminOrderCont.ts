import {connect} from 'react-redux';
import AdminOrder from '../AdminOrder';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actionsCart';



function mapStateToProps(state: any) {
    console.log("mapstatetorprops ", state);
    return {
        customers: state.cr.customers
    }
}
function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


const AdminOrderCont = connect(mapStateToProps,
    mapDispatchToProps) (AdminOrder);

export default AdminOrderCont;

