import Button from '@mui/material/Button';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar() {
  return (
      <div className='navbar'>
        <Button size="medium">
        <AttachMoneyIcon/></Button>
        <Button size="medium">Home</Button>
        <Button size="medium">Finances</Button>
        <Button size="medium">Send and Request</Button>
        <Button size="medium">Deals</Button>
        <Button size="medium">Wallet</Button>
        <Button size="medium">Activity</Button>
        <Button size="medium">Help</Button>
        <Button size="medium" style={{marginLeft:"auto"}}><NotificationsIcon/></Button>
        <Button size="medium" ><SettingsIcon/></Button>
        <Button size="medium" >Log out</Button> 
      </div>
  );
}

export default Navbar;
