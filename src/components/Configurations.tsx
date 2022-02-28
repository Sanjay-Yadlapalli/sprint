import './config.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import InfoIcon from '@mui/icons-material/Info';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { useState } from 'react';
const widgets = [
  {
    id : 1,
    imgUrl : 'https://cdn.freelogovectors.net/wp-content/uploads/2012/02/dell_logo_2016.png'

  },
  {
    id : 2,
    imgUrl : 'https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-ibm-logos-download-12.png'
    
  },
  {
    id : 3,
    imgUrl : 'https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png'
    
  },
  {
    id : 4,
    imgUrl : 'https://cdn.freelogovectors.net/wp-content/uploads/2012/02/dell_logo_2016.png'
    
  },
  {
    id : 5,
    imgUrl : 'https://cdn.freelogovectors.net/wp-content/uploads/2012/02/dell_logo_2016.png'
    
  },
  {
    id : 6,
    imgUrl : 'https://cdn.freelogovectors.net/wp-content/uploads/2012/02/dell_logo_2016.png'
    
  },
  {
    id : 7,
    imgUrl : 'https://cdn.freelogovectors.net/wp-content/uploads/2012/02/dell_logo_2016.png'
    
  },
  {
    id : 8,
    imgUrl : 'https://cdn.freelogovectors.net/wp-content/uploads/2012/02/dell_logo_2016.png'
    
  },
  {
    id : 9,
    imgUrl : 'https://cdn.freelogovectors.net/wp-content/uploads/2012/02/dell_logo_2016.png'
    
  },
  {
    id : 10,
    imgUrl : 'https://cdn.freelogovectors.net/wp-content/uploads/2012/02/dell_logo_2016.png'
    
  }
]
const Configurations = () => {
  const [settings , setSettings] = useState(false)
  const [isDismiss , setIsDismiss] = useState(false)
  return (
    <div className = 'config-main-container'>
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
        !isDismiss ? (<>
        <div className='dismiss'>
          <InfoIcon style={{alignSelf : 'center'}}/>
          <p style={{alignSelf : 'center'}}>This is the sample report section. <span style={{cursor : 'pointer' , color : 'blue' , fontWeight : '400px'}} onClick={() => setIsDismiss(true)}>Dismiss</span> for real dashboard</p>
      </div>
        <div style={{display : 'flex' , margin : '25px' , alignItems : 'center'}}>
        <div style={{height : '45px' , width : '45px' , backgroundColor : '#F1F2F6' , display : 'flex' , justifyContent : 'center' , alignItems : 'center' , borderRadius : '4px'}}>
        <SearchIcon />
        </div>
      <button className='btn' style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px' , backgroundColor : '#E0EDFF'}}>All 20</button>
      <button className='btn' style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>Dell EMC</button>
      <button className='btn' style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>Hitachi</button>
      <button className='btn' style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>IBM</button>
      <button className='btn' style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>Net App</button>
      <button className='btn' style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>HP</button>
      <button className='btn' style={{height : '45px' , width : '144px' , borderRadius : '25px' , border : '0px' , margin : '5px'}}>Pure Storage</button>
      <ArrowForwardIosIcon className='icons' style={{backgroundColor : '#EEEFF3' , width : '55px' , height : '45px' , padding : '8px' , borderRadius : '25px'}}/>
      </div>
      <div className='widgets-container'> 
       {
         widgets.map(widget => {
           return(
            <div className='widget-card' key={widget.id}>
            <div className='details'>
              <div>
                <div className='logo'>
                  <img src={widget.imgUrl} alt='logo'/>
                </div>
                <p style={{fontFamily : 'sans-serif' , color : '#000000' , fontWeight : '400' , fontSize : '14px'}}>Model Name</p>
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
              {settings ? <div className='settings'></div> : null}
                <SettingsIcon onClick={() => setSettings(!settings)}/>
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
       <div style={{height : '47px' , width : '47px' , marginRight : '55px', display : 'flex' , flexDirection : 'column' , alignSelf : 'flex-end' , justifyContent : 'center'}}>
         <MapsUgcIcon style={{fontSize : '25px' , alignSelf : 'center'}}/>
       </div></>) : (<>
       <div style={{display : 'flex' , flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center' , margin : '35px'}}>
         <h1>Welcome! get started with two different ways.</h1>
         <div style={{display : 'flex' , justifyContent : 'space-evenly' , marginTop : '55px'}}>
            <div style={{display : 'flex' , flexDirection : 'column' , justifyContent : 'center' , marginRight : '35px'}}>
              <p style={{alignSelf : 'center' , fontSize : '31px' , fontWeight : '400' , fontStyle : 'normal'}}>Step 1</p>
              <div style={{height : '454px' , width : '461px' , display : 'flex' , flexDirection : 'column' , padding : '10px' , borderRadius : '8px' , border : '1px solid #94A2AB'}}>
                <InsertPhotoIcon style={{width : '435px' , fontSize : '300px' , alignSelf : 'center' , color : '#94A2AB' , backgroundColor : '#E0E7EC'}}/>
                <p style={{fontSize : '22px' , fontWeight : '400px' , margin : '10px' , textAlign : 'center'}}>Choose from available predefined reports in Adapt</p>
              </div>
            </div>
            <div style={{display : 'flex' , flexDirection : 'column' , justifyContent : 'center'}}>
              <p style={{alignSelf : 'center' , fontSize : '31px' , fontWeight : '400' , fontStyle : 'normal'}}>Step 2</p>
              <div style={{display : 'flex' , flexDirection : 'column' , padding : '10px' , height : '454px' , width : '461px' , alignSelf : 'center' , borderRadius : '8px' , border : '1px solid #94A2AB'}}>
                <InsertPhotoIcon style={{fontSize : '300px' , width : '435px' , alignSelf : 'center' , color : '#94A2AB' , backgroundColor : '#E0E7EC'}}/>
                <p style={{fontSize : '22px' , fontWeight : '400px' , margin : '10px' , textAlign : 'center'}}>Preview the report with live data and import as needed</p>
              </div>
            </div>
         </div>
         <Link style={{textDecoration : 'none'}} to = '/reports-datasource'><p style={{fontSize: '32px' , color : '#046BFC' , fontWeight : '400px' , marginTop : '100px'}}>Click to Preview and Import</p></Link>
         </div></>)
      }
    </div>
  )
}

export default Configurations