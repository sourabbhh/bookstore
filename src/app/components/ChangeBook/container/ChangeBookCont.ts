import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import { bindActionCreators } from 'redux';
import ChangeBook from '../ChangeBook'


function mapStateToProps(state: any) {
    console.log("mapstatetorprops ", state);
    return {
        books: state.br.books,
        book: state.br.book,
        index: state.br.index
    }
}


function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const ChangeBookCont = connect(mapStateToProps,
    mapDispatchToProps) (ChangeBook);

export default ChangeBookCont;

