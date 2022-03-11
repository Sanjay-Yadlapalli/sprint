import './reports.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import ShareIcon from '@mui/icons-material/Share'
import SettingsIcon from '@mui/icons-material/Settings'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssessmentIcon from '@mui/icons-material/Assessment'
import SearchIcon from '@mui/icons-material/Search'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useState } from 'react'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import {CompaniesList} from './CompaniesList'
import BarChartIcon from '@mui/icons-material/BarChart'
const Reports = () => {
  const [searchInput , setSearchInput] = useState('')
  const [modelSelected , setModelSelected] = useState('')
  const [isOpened , setIsOpened] = useState(false)
  const dataArrived : boolean = true
  return (
    <>
    <div className='reports-container'>
    <div className = 'config-nav'>
        <div style={{display : 'flex' , justifyContent : 'space-between' , padding : '10px' , margin : '10px'}}>
          <button style={{height : '40px' , width : '164px' , fontSize : '15px' , borderRadius : '25px' , border : '0px' , margin : '5px' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}><DashboardIcon style={{marginRight : '5px' , fontSize : '20px'}}/>Dashboard</button>
          <button style={{height : '40px' , width : '164px' , fontSize : '15px' , borderRadius : '25px' , border : '0px' , margin : '5px' , backgroundColor : '#32C5FF' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}><AssessmentIcon style={{marginRight : '5px' , fontSize : '20px'}}/>Report</button>
          <button style={{height : '40px' , width : '164px' , fontSize : '15px' , borderRadius : '25px' , border : '0px' , margin : '5px' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}><SettingsIcon style={{marginRight : '5px' , fontSize : '20px'}}/>Settings</button>
        </div>
        <div style={{display : 'flex' , alignItems : 'center' , marginRight : '20px'}}>
          <ShareIcon style={{width : '75px'}}/>
          <button style={{height : '40px' , fontSize : '17px' , width : '164px' , borderRadius : '25px' , border : '0px' , margin : '5px' , backgroundColor : '#32C5FF'}}><span style={{fontSize : '20px'}}>+</span> Import Report</button>
        </div>
    </div>
    {
      !dataArrived  ? (<div style={{display : 'flex' , flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center' , marginTop : '75px'}}>
      <p style={{alignSelf : 'center' , fontSize : '31px' , fontWeight : '400' , fontStyle : 'normal' , marginBottom : '35px'}}>No Results</p>
      <div style={{height : '400px' , width : '461px' , display : 'flex' , flexDirection : 'column' , padding : '10px' , borderRadius : '8px' , border : '1px solid #94A2AB'}}>
          <InsertPhotoIcon style={{width : '435px' , fontSize : '300px' , alignSelf : 'center' , color : '#94A2AB' , backgroundColor : '#E0E7EC'}}/>
          <p style={{fontSize : '22px' , fontWeight : '400px' , margin : '10px' , textAlign : 'center' , alignSelf : 'center'}}>No valid data source found</p>
      </div>
      <div style={{alignSelf : 'center' , width : '910px' , height : '56px' , marginTop : '25px'}}>
      <p style={{color : 'black' , textAlign : 'center' , fontSize : '24px' , fontWeight : '400' , fontStyle : 'normal'}}>Before importing any pre defined reports please add atleast 1 data source and wait for 60 mins of data collection before you can preview any reports</p>
      </div>
  </div>) : (<><div style={{display : 'flex' , margin : '25px' , alignItems : 'center'}}>
        
        {
          isOpened ? 
          <Input
          style={{marginRight : '10px' , alignSelf : 'center'}}
          onChange = {(e : any) => setSearchInput(e.target.value)}
          startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
  /> :
  <div onClick = {() => setIsOpened(true)} style={{cursor : 'pointer' , height : '45px' , width : '45px' , backgroundColor : '#F1F2F6' , display : 'flex' , justifyContent : 'center' , alignItems : 'center' , borderRadius : '4px'}}>
    <SearchIcon />
  </div>
        }
        
      <button className='btn' 
      onClick={(e : any) => setSearchInput(e.target.value)}
      value = ''
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        All 20</button>
      <button className='btn' 
      onClick={(e : any) => setSearchInput(e.target.value)}
      value = 'dell'
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        Dell EMC</button>
      <button className='btn' 
      onClick={(e : any) => setSearchInput(e.target.value)}
      value = 'hitachi'
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        Hitachi</button>
      <button className='btn'
      value = 'ibm' 
      onClick={(e : any) => setSearchInput(e.target.value)}
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        IBM</button>
      <button className='btn'
      value = 'netapp' 
      onClick={(e : any) => setSearchInput(e.target.value)}
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        Net App</button>
      <button className='btn'
      value = 'hp'
      onClick={(e : any) => setSearchInput(e.target.value)} 
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        HP</button>
      <button className='btn'
      value = 'pure storage'
      onClick={(e : any) => setSearchInput(e.target.value)} 
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        Pure Storage</button>
      <ArrowForwardIosIcon className='icons' style={{backgroundColor : '#EEEFF3' , width : '55px' , height : '45px' , padding : '8px' , borderRadius : '25px'}}/>
      </div>
     <div style={{display : 'flex' , }}>
       <button className='btn' 
       value = ''
       onClick={(e : any) => setModelSelected(e.target.value)}
       style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
         Models</button>
      <button className='btn' 
      onClick={(e : any) => setModelSelected(e.target.value)}
      value = 'powerflex'
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        Power Flex</button>
      <button className='btn'
      onClick={(e : any) => setModelSelected(e.target.value)}
      value = 'unity' 
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        Unity</button>
      <button className='btn' 
      onClick={(e : any) => setModelSelected(e.target.value)}
      value = 'powerstore'
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        PowerStore</button>
      <button className='btn' 
      onClick={(e : any) => setModelSelected(e.target.value)}
      value = 'powermax'
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        PowerMax</button>
      <button className='btn'
      onClick={(e : any) => setModelSelected(e.target.value)} 
      value = 'xtremio'
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        XtreamIO</button>
      <button className='btn' 
      onClick={(e : any) => setModelSelected(e.target.value)}
      value = 'scseries'
      style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>
        SC Series</button>
      <ArrowForwardIosIcon className='icons' style={{backgroundColor : '#EEEFF3' , width : '55px' , height : '45px' , padding : '8px' , borderRadius : '25px' , alignSelf : 'center'}}/>
     </div> 
      <div style={{margin : '20px' , alignSelf : 'flex-start'}}>
        <h2>Import from all available report found</h2>
      </div>
      <div className='widgets-container scroll-container'>
      {
         CompaniesList.filter(company => {
           if (searchInput === '') {
              return company
           }
           else if (company.companyName.toLowerCase().includes(searchInput.toLowerCase())) {
             return company
           }
         }).filter(company => {
           if (modelSelected === '') {
             return company
           }
           else if (company.model === modelSelected){
              return company
           }
         }).map(company => {
           return(
            <div className='widget-card' key={company.id}>
            <div className='details'>
              <div>
                <div className='logo'>
                  <h1 style = {{marginBottom : '5px' , color : '#1ba1d6'}}>{company.companyName}</h1>
                </div>
                <p style={{fontFamily : 'sans-serif' , color : '#000000' , fontWeight : '400' , fontSize : '14px'}}>{company.model}</p>
              </div>
              <div>
                <h2 style={{fontFamily : 'sans-serif' , color : '#000000' , fontWeight : '400' , fontSize : '21px'}}>Report Heading</h2>
                <p style={{color : '#787878' , fontWeight : '400' , fontSize : '10px'}}>Details of report telling a short overview of the report</p>
              </div>
              <div>
                <p style={{color : '#7B747B' , fontWeight : '400' , fontSize : '12px'}}>Updated 3 hrs ago</p>
              </div>
            </div>
            <div className='right-col'>
              <div>
                <SettingsIcon />
              </div>
              <div>
                <BarChartIcon style={{fontSize : '35px'}}/>
              </div>
            </div>
           </div>
           )
         })
       }
      </div>
      </>)
    }
    </div>
    </>
  )
}

export default Reports