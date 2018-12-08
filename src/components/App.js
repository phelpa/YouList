import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    videos: state.videos,        //gonna be this.props.videos
    annotations: state.annotations,   //gonna be this.props.annotations
    courses: state.courses,  //gonna be this.props.courses
    video: state.video
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
  
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;