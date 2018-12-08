import React from 'react';

class Annotations extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
  
  return (

    <article className="mainDiv vh-75 w-20  br2 ba dark-gray b--black-10 mh1 mv5">
      <h1 className="Title f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Annotations</h1>
      <div className="Annotations pa3 bt b--black-10">

        <div className="f6 f5-ns lh-copy measure">
        {'Title'}
        </div>
        <div className="f6 f5-ns lh-copy measure">
        {'annotation'}
        </div>
        

      </div>
    </article>
      
    );
  }
};
  

export default Annotations;
