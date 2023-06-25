import TextField from '@mui/material/TextField';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
function Input() {
    return (
        <div className='search-container'>
            <TextField fullWidth label="Search by name or email" id='input-field' />
            
            <Button size="large"><DownloadIcon/></Button>
        </div>
    );
  }
  
  export default Input;