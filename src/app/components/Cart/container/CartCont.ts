import {connect} from 'react-redux';
import Cart from '../Cart';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
import * as actionsCart from '../../actions/actionsCart';


function mapStateToProps(state: any) {
    console.log("mapstatetorprops ", state);
    return {
        cart:state.cr.cart
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators({...actions,...actionsCart}, dispatch)//combining two seperate actions files
    }
}

const CartCont = connect(mapStateToProps,
    mapDispatchToProps) (Cart);

export default CartCont;

