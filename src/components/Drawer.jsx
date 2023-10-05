import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AlignItemsList from '../components/CartList'
export default function TemporaryDrawer({open, setOpen, cardData, deleteCart, updateQty}) {
  
  

  return (
    <div>
    
        <React.Fragment>
         
          <Drawer
            anchor='right'
            open={open}
            onClose={()=>setOpen(false)}
          >
            <Box role="presentation">
            <AlignItemsList deleteCart={deleteCart} cardData={cardData} updateQty={updateQty} />
            </Box>
          </Drawer>
        </React.Fragment>
    
    </div>
  );
}