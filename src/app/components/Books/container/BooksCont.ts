import {connect} from 'react-redux';
import Books from '../Books';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
import * as actionsCart from '../../actions/actionsCart';



function mapStateToProps(state: any) {
    console.log("mapstatetorprops ", state);
    return {
        books: state.br.books,
        book: state.br.book,
        cart: state.cr.cart
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators({...actions,...actionsCart}, dispatch)
    }
}


const BookCont = connect(mapStateToProps,
    mapDispatchToProps) (Books);

export default BookCont;

