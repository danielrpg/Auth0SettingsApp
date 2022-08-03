// ** React Import

// ** MUI Imports
import Box from '@mui/material/Box'

const BuyNowButton = () => {

  return (
    <Box
      className='upgrade-to-pro-button mui-fixed'
      sx={{ right: theme => theme.spacing(20), bottom: theme => theme.spacing(10), zIndex: 11, position: 'fixed' }}
    >
    </Box>
  )
}

export default BuyNowButton
