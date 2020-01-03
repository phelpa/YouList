import React from 'react';

class Annotations extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  submitAnnotation = (e) => {

    e.preventDefault();

    const annotation = this.refs.annotation.value;
     //TODO arrendondar pra baixo
    //deixar igual o que o tempo no video mostra
    let videotime = window.player.getCurrentTime().toFixed(0);

    const { videoId } = this.props.params;
    const userId = 10

    this.props.submitAnnotation(userId, videoId, videotime, annotation);
    this.refs.annotationForm.reset();
  }

  secondsToMinutes = (seconds) => {
    //TODO arrendondar pra baixo
    //deixar igual o que o tempo no video mostra
    let minutes = Math.floor(seconds/60);
    let remainSecs = seconds % 60;

    if (remainSecs < 10 && remainSecs > 0) {
    return `${minutes}:0${remainSecs-1}`
    } else if (remainSecs >= 10) {
      return `${minutes}:${remainSecs-1}`
    } else if (remainSecs === 0) {
      return `${minutes}:${'00'}`
    } 

  }

  componentDidMount() {

    const { videoId } = this.props.params;
    const userId = 10
    this.props.requestAnnotations(userId, videoId)

  }

  render() {
    
  let sortedAnnotations;
  const { isPending } = this.props.annotations;


  return (
    
    //checking if the annotations Request is pending and
    //if the window.player that has the getCurrentTime() exists
    isPending && window.player===undefined ? <h1>Waiting request</h1> :

    <article className="mainDiv vh-75 w-20  br2 ba dark-gray b--black-10 mh1 ">
      <h1 className="Title f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Annotations</h1>
      <div className="Annotations pa3 bt b--black-10">
      {console.log(sortedAnnotations = this.props.annotations.annotationsData.sort((a, b) => a.videotime - b.videotime))}
      
      { 
       sortedAnnotations.map((annotation, i) => {
        return (
        <div className="mv2" key={i}>

          <span className="f6 f5-ns lh-copy b measure ph1 avenir" >
          {this.secondsToMinutes(annotation.videotime)}
          </span>
          
          <span className="f6 f5-ns lh-copy fs-normal avenir measure">
          {annotation.annotation} 
          </span>
        </div> 
        )
      })
      }
        
        <form ref="annotationForm" onSubmit={this.submitAnnotation}>
          <input type="text" ref="annotation" placeholder="annotation" 
          className="h2" />
          <input type="submit" hidden/>
        </form>       
        
      </div>
    </article>
    
  );
 }
};
//document.querySelector(".ytp-time-current")
export default Annotations;
