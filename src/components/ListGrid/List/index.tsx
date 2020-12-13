import React from 'react';
import { Link } from 'react-router-dom';
import { IList } from '../../../interfaces/IList';

interface IProps {
  list: IList;
}

const List = React.memo(({ list }: IProps) => {
  return (
    <article className="mainDiv br2 w5 ba dark-gray b--black-10 mh4 mv4 center ma4">
      <img className="h5 db w-100 br2 br--top" src={list.urlimage} alt="" />
      <div className="description pa2 ph3-ns pb3-ns">
        <Link to={`/list/${list.id}`} className="no-underline black">
          <h1 className="videotitle f5 f4-ns mv0">{list.title}</h1>
        </Link>
        <p className="descriptionText f6 lh-copy measure mt2 mid-gray">
          {list.description}
        </p>
      </div>
    </article>
  );
});

export default List;
