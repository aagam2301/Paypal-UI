import Button from '@mui/material/Button';
import Card from "./Card";

function Payment({paymentlist}) {

  return (
    <div>
        <div>
            <p>Filter by</p>
            <div className='filter-buttons'> 
                <Button style={{borderRadius:"25px"}} variant="outlined">Date: Last 90 days</Button>
                <Button style={{borderRadius:"25px"}} variant="outlined">Type</Button>
                <Button style={{borderRadius:"25px"}} variant="outlined">Status</Button>
            </div>
        </div>
        <div>
            <h4>Completed</h4>
            <p>This week</p>
            <div className='payments'>
                {paymentlist.map((payment) => <Card payment={payment}/>)}
            </div>
        </div>
    </div>
  );
}

export default Payment;
