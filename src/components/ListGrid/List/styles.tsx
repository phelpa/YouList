import { styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export const StyledArticle = styled('article')({
  borderRadius: '.25rem',
  width: '16rem',
  borderStyle: 'solid',
  borderWidth: '1px',
  color: '#333333',
  borderColor: 'rgba( 0, 0, 0, .1 )',
  marginLeft: 'auto',
  marginRight: 'auto',
  margin: '2rem'
});
export const StyledImg = styled('img')({
  height: '16rem',
  width: '100%',
  borderRadius: '.25rem',
  borderBottomLeftRadius: 0,
  bottomRightRadius: 0
});

export const Description = styled('div')({
  padding: '1rem'
});

export const VideoTitle = styled('h1')({
  fontSize: '1rem',
  marginTop: 0,
  marginBottom: 0
});

export const DescriptionText = styled('p')({
  fontSize: '.875rem',
  lineHeight: 1.5,
  maxWidth: '30em',
  marginTop: '0.5rem',
  color: '#555555'
});

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#000000'
});
