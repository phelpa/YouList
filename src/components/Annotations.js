import React from 'react';

class Annotations extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {

    const { videoId } = this.props.params;
    const userId = 10
    this.props.requestAnnotations(userId, videoId)

    
  }

  componentDidUpdate() {

    //console.log(window.player.getCurrentTime(),'<Annotations/>')
  }

  render() {

  const { isPending } = this.props.annotations;

  return (

     isPending  ? <h1>Waiting request</h1> :

    <React.Fragment>
  
    <article className="mainDiv vh-75 w-20  br2 ba dark-gray b--black-10 mh1 mv5">
      <h1 className="Title f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Annotations</h1>
      <div className="Annotations pa3 bt b--black-10">

        <span className="f6 f5-ns lh-copy b measure ph1">
        {this.props.annotations.annotationsData[0].title}
        </span>
        
        <span className="f6 f5-ns lh-copy measure">
        {this.props.annotations.annotationsData[0].annotation} 
        </span>

    
      </div>
    </article>
    </React.Fragment> 
    
  );
 }
};
  //  const {title, annotation} = this.props.annotations.annotationsData[0]

export default Annotations;
