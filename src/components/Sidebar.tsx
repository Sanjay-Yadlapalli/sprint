import './sidebar.css'
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import WidgetsIcon from '@mui/icons-material/Widgets';
import StarIcon from '@mui/icons-material/Star';
import LayersIcon from '@mui/icons-material/Layers';
import PublicIcon from '@mui/icons-material/Public';
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div style={{height : '54px' , width : '63px' , display : 'flex' , flexDirection : 'column' , justifyContent : 'center' , borderRadius : '10px' , backgroundColor : '#FFFFFF'}}>
        <WidgetsIcon style={{fontSize : '32px' , alignSelf : 'center'}}/>
        </div>
        <div style={{display  :'flex' , flexDirection : 'column' , justifyContent : 'space-between'}}>
          <StarIcon style={{fontSize : '32px' , alignSelf : 'center' , marginBottom : '65px' , color : '#000000;'}}/>
          <LayersIcon style={{fontSize : '32px' , alignSelf : 'center' , marginBottom : '65px' , color : '#000000;'}}/>
          <PublicIcon style={{fontSize : '32px' , alignSelf : 'center' , marginBottom : '55px' , color : '#000000;'}}/>
        </div>
        <div style={{height : '55px' , width : '55px' , backgroundColor : '#FFFFFF' , display : 'flex' , flexDirection : 'column' , justifyContent : 'center' , borderRadius : '10px'}}>
        <ViewModuleIcon style={{fontSize : '32px' , alignSelf : 'center' , color : '#000000'}}/>
        </div>
    </div>
  )
}

export default Sidebar