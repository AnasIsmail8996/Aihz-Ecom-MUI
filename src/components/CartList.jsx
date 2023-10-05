import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'; 
import Alert from '@mui/material/Alert'; 
import Typography from '@mui/material/Typography';
  import {MdDeleteOutline} from 'react-icons/md'
 import {AiOutlinePlusSquare}from 'react-icons/ai'
 import {AiOutlineMinusSquare}from 'react-icons/ai'
 import {Link} from 'react-router-dom' 
export default function AlignItemsList({ cardData , deleteCart, updateQty}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {cardData.map((v, i) => (
        <div key={i} style={{position:'relative'}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar style={{padding:5}}>
             <img style={{width:80, height:80 , objectFit:'contain'}} src={v.image} alt=''/>
            </ListItemAvatar>
            <ListItemText
              primary={v.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                 Rs:  {v.price * v.qty}
                  </Typography>
                  <Typography style={{dispaly:'flex'}}>

                  {"QTY:"}<AiOutlineMinusSquare onClick={()=>v.qty >0 &&  updateQty('-', v.id)} size={22}/>
                  <span style={{marginLeft:5, marginRight:5}}>
                    
                    {v.qty}
                    </span>
                   <AiOutlinePlusSquare  onClick={()=>updateQty('+', v.id)} size={22}/>
                   <MdDeleteOutline onClick={()=>deleteCart(v.id)} style={{marginLeft:10, cursor:'pointer'}} color='pink' size={25}/>
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        
        </div>
      ))}

     {cardData.length ? <div>
      <Link to={'/checkOut'}>
        <Button style={{width:'100%', marginTop:20 }} size={'small'}>
            Check_Out
        </Button>
      </Link>

      </div>:
      <div style={{padding:50}}> 
<Alert variant="outlined" severity="error">
  Please Add Cart & Poducts!
</Alert>
      </div>
      }
    </List>
  );
}
