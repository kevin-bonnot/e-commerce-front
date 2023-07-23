import Product from '../../models/product.ts';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

interface Props {
  product: Product
}

const ProductCard = ({product}: Props) => {
  return <Card sx={{maxWidth: 345}}>
    <CardMedia sx={{height: 140}} image={product.image ? product.image : '/vite.svg'} />
    <CardContent>
      <Typography variant='h5'>{product.name}</Typography>
      <Typography variant='body1'>{product.description}</Typography>
      <Typography variant='body1'>{product.price}€</Typography>
    </CardContent>
    <CardActions>
      <Link to={`${product.id}`}>
        <Button>Voir le produits</Button>
      </Link>
    </CardActions>
  </Card>;
};

export default ProductCard;
