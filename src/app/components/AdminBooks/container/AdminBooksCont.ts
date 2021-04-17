import {connect} from 'react-redux';
import AdminBooks from '../AdminBooks';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';



function mapStateToProps(state: any) {
    console.log("mapstatetorprops ", state);
    return {
        books: state.br.books,
        book: state.br.book
    }
}
function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}


const AdminBooksCont = connect(mapStateToProps,
    mapDispatchToProps) (AdminBooks);

export default AdminBooksCont;

