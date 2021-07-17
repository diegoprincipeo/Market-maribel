import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
       <Button variant="contained" type="button" style={{ fontSize: 12, background: '#d3d3d3', color: '#000', position:'relative', float: 'right'}} color="secondary" onClick={() => handleRemoveFromCart(item.id)}>X</Button>
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} style={{ margin: 'auto', width: 240,}} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4"style={{ fontSize: 20,}}>{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions} style={{ margin: 'auto', background: '#ffda00'}}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={ () => handleUpdateCartQty(item.id, 5 > item.quantity && item.quantity + 1)}>+</Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
