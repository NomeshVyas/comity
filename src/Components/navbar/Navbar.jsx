import { AppBar, Box, IconButton, Toolbar, styled } from '@mui/material';
import { navyLogoColor } from '../../Common/constants';
import NavbarContent from './NavbarContent';
import { navRoutes } from '../../Common/routes';
import { Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../../Common/images/logos/comity2.png'
import { useContext } from 'react';
import navContext from '../../context/admin/navContext';

const StyledAppBar = styled(AppBar)({
  boxShadow: 'none'
})

const StyledToolbar = styled(Toolbar)({
  height: 70,
  display:'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #eee',
})

const LogoBox = styled(Box)({
  cursor: 'pointer',
  '& > img': {
    width: 130,
    height: 65,
  },
})
    
const navOptions = {
  display: {
    xs: 'none',
    sm: 'flex'
  },
  height: '100%', 
}

const menuIcon = {
  display: {
    xs: 'block',
    sm: 'none'
  },
  color: navyLogoColor
}

function Navbar({ toggleDrawer }) {

  const { navbarRoutes } = useContext(navContext);

  const navigate = useNavigate();
  return (
    <StyledAppBar color='action' >
      <StyledToolbar>

        {/* Logo Section */}
      <LogoBox onClick={() => navigate('/')} >
        <img src={logo} alt="" />
      </LogoBox>

      {/* Navbar Options */}
      <Box sx={navOptions} >
        {
          navbarRoutes.map(content => 
            <NavbarContent key={content.name} content={content} />
          )
        }
      </Box>

      {/* For Mobile Screen */}
      {
        <IconButton onClick={toggleDrawer} sx={menuIcon} >
          <Menu />  
        </IconButton>
      }
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default Navbar