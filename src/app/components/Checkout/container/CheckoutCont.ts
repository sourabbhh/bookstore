import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import * as actionsCart from '../../actions/actionsCart';
import { bindActionCreators } from 'redux';
import Checkout from '../Checkout'


function mapStateToProps(state: any) {
    console.log("mapstatetorprops ", state);
    return {
        customers: state.cr.customers,
        customerDet: state.cr.customerDet,
        cart: state.cr.cart
    }
}


function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators({...actions,...actionsCart}, dispatch)//combining two seperate actions files
    }
}

const CheckoutCont = connect(mapStateToProps,
    mapDispatchToProps) (Checkout);

export default CheckoutCont;

