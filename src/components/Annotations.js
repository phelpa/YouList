import React from 'react';

class Annotations extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.requestAnnotations();
  }  

  render() {
  /*
  const { isPending } = this.props.annotations;
  const { videoId } = this.props.params; 
*/
 //locating the array to map the annotations
 /*
  const annotationsArrays = this.props.annotations.annotationsData[videoId];
  console.log(annotationsArrays, 'oia a array aqui')

  */

  //REFATORAR PARA DEIXAR DAORA
  return (

    <article className="mainDiv vh-75 w-20  br2 ba dark-gray b--black-10 mh1 mv5">
      <h1 className="Title f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Anotações</h1>
      <div className="Annotations pa3 bt b--black-10">

      {/* isPending ? <h1> Waiting Request </h1> :

      this.props.annotations.annotationsData[videoId].map((annotation,i) =>

        <p className="f6 f5-ns lh-copy measure">
        {annotation.text}
        </p>
        
      )*/}

      
      </div>
    </article>
      
    );
  }
};

/*Annotations.defaultProps = {aldair: {'annotationsData':{'pereira':'pereira'}} }*/
  

export default Annotations;
