import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

function Card ({payment}){

  return (
    <div className='payment-card'>
      <Avatar alt={payment.name} src={payment.url}/>
      <div className='payment-details'> 
        <h4>{payment.name}</h4>
        <p>{payment.date}&nbsp; - &nbsp;{payment.type}</p>
      </div>
      <p style={{margin:"0 0 0 auto"}}>{payment.amount}</p>
    </div>
  );
}

export default Card;
