import React,{useState, useRef, useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import search from '../../assets/search.png';
import logo from '../../assets/DIAGNAL-Logo.svg'
import backButton from '../../assets/Back.png';
import  './style.css'


export default function TopBar(props) {
  const [enableSearch,setEnableSearch] = useState(false);
  const input1 = useRef(null);
  useEffect(()=>{
    if(input1){
      input1?.current?.focus();
    }
  },[enableSearch])
  const searchContent = (e)=>{
    setEnableSearch(true);
    
  }
  const backToHome = (e)=>{
    setEnableSearch(false);
    props.searchContent('');
  }
  return (
    <div className="navbar-container">
      <div className='logo-container'>
          <img src={logo} alt="diaganal-logo"/>
      </div>
      <div className='back-btn-container'>
      {enableSearch &&<img src={backButton} alt="back-btn" onClick={backToHome}/>}
      </div>
      <div  className={ enableSearch ? 'search-container is_active' :'search-container'}>
      <div className='input-search'>
        {enableSearch && <input type="text" ref={input1} placeholder='serach movies, shows etc' onChange={e=>props.searchContent(e.target.value)}/>}
      </div>
      <div className='search-icon' onClick={searchContent}>
        <img src={search} alt="search" />
      </div>
      </div>
    </div>
  );
}