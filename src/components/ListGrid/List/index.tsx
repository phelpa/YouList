import React, { memo } from 'react';

import { IList } from '../../../interfaces/IList';
import {
  StyledArticle,
  StyledImg,
  Description,
  VideoTitle,
  DescriptionText,
  StyledLink
} from './styles';

interface IProps {
  list: IList;
}

const List = memo(({ list }: IProps) => {
  return (
    <StyledArticle>
      <StyledImg src={list.urlimage} alt="" />
      <Description>
        <StyledLink to={`/list/${list.id}`}>
          <VideoTitle>{list.title}</VideoTitle>
        </StyledLink>
        <DescriptionText>{list.description}</DescriptionText>
      </Description>
    </StyledArticle>
  );
});

export default List;
