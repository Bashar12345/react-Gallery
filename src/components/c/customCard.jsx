import { styled } from '@mui/system';
import Card from '@mui/material/Card';

const StyledCard = styled(Card)({
    maxWidth: '100%',
    height: 'auto',
    padding: 0,
    margin: 0,
    '& img': {
      height: '150px',
      objectFit: 'cover',
    },
    // ['@media (min-width:600px)']: {
    //   maxWidth: '25%',
    // },
  });
export default StyledCard;