import './reports.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
const Reports = () => {
  return (
    <>
    <div className='reports-container'>
    <div style={{display : 'flex' , flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center' , marginTop : '75px'}}>
        <p style={{alignSelf : 'center' , fontSize : '31px' , fontWeight : '400' , fontStyle : 'normal' , marginBottom : '35px'}}>No Results</p>
        <div style={{height : '400px' , width : '461px' , display : 'flex' , flexDirection : 'column' , padding : '10px' , borderRadius : '8px' , border : '1px solid #94A2AB'}}>
            <InsertPhotoIcon style={{width : '435px' , fontSize : '300px' , alignSelf : 'center' , color : '#94A2AB' , backgroundColor : '#E0E7EC'}}/>
            <p style={{fontSize : '22px' , fontWeight : '400px' , margin : '10px' , textAlign : 'center' , alignSelf : 'center'}}>No valid data source found</p>
        </div>
        <div style={{alignSelf : 'center' , width : '910px' , height : '56px' , marginTop : '25px'}}>
        <p style={{color : 'black' , textAlign : 'center' , fontSize : '24px' , fontWeight : '400' , fontStyle : 'normal'}}>Before importing any pre defined reports please add atleast 1 data source and wait for 60 mins of data collection before you can preview any reports</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Reports