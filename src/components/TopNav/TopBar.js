import React,{useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/DIAGNAL-Logo.svg'
import  './style.css'
import back from '../../assets/Back.png'
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function TopBar(props) {
  const [enableSearch,setEnableSearch] = useState(false)
  const searchContent = (e)=>{
    setEnableSearch(true);
  }
  const backToHome = (e)=>{
    setEnableSearch(false);
    props.searchContent('');
  }
  return (
    <Box className="top-bar-container" style={{"width":"100%"}} >
      <AppBar position="static" className="bg-color">
        <Toolbar className='clear-padding'>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{"text-align":"left"}}
          >
            <div className='logo-container'>
            <img src={logo}  alt="Diagnal" />
            </div>
          </Typography>
          {enableSearch && <img  className="back-btn" src={back} alt="back" onClick={backToHome}/>}
          <Search className='align-right'>
              <SearchIcon className='search-icon' onClick={searchContent}/>
            {enableSearch && <StyledInputBase 
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={e=>props.searchContent(e.target.value)}
            /> }
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}