
import { styled } from '@mui/system';
import Card from '@mui/material/Card';


const FeatureCard = styled(Card)({

    maxWidth: '400px',
    height: '400px',
    margin: 0,
    '& img': {
        height: 'auto',
        objectFit: 'cover',
      }
    // ['@media (min-width:600px)']: {
    //   maxWidth: '75%',
    //   maxHeight: '50vh',
    // },
    // ['@media (min-width:960px)']: {
    //   maxWidth: '50%',
    //   maxHeight: '70vh',
    // },
    // ['@media (min-width:1280px)']: {
    //   maxWidth: '40%',
    //   maxHeight: '80vh',
    // },
  });

 export default FeatureCard;