import React, { memo } from 'react';

import Icon from '@material-ui/core/Icon';

interface IProps {
  callback: Function;
  icon: string;
  description: string;
}

const ActionIcon = memo((props: IProps) => {
  const hoverEffect =
    'link dim black mw5 hide-child b--black-20 pa4 br2 pointer';

  return (
    <article
      onClick={() => props.callback()}
      className="br2 w5 dark-gray mh4 mv4 center"
    >
      <div className={`${hoverEffect} pa2 ph3-ns pb3-ns`}>
        <div className="bg-light-gray h3 w3 flex justify-center items-center center br3">
          <Icon fontSize="large">{props.icon}</Icon>
        </div>

        <p className="f6 lh-copy measure mt2 mid-gray flex justify-center tc">
          <b>{props.description}</b>
        </p>
      </div>
    </article>
  );
});

export default ActionIcon;
