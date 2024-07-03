import { items } from '../../Common/imgCarouse'
import { Carousel } from 'antd'
import { Box } from '@mui/material'
import { lightNavyBg } from '../../Common/constants'

const ImgCarousel = () => {
  return (
    <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: lightNavyBg,
        '& > div': {
            width: {
                xs: '100%',
                sm: '100%',
                md: '70%',
            },
        },
    }}>

    <Carousel autoplay autoplaySpeed={2000} arrows={true} adaptiveHeight={true} >
        {
            items?.map(item => 
                <div style={{background: 'red'}} key={item.id}>
                <img width={'100%'} src={item.src} alt='' style={{
                    // opacity: 0.5
                }} />
                </div>
            )
        }
    </Carousel>
    </Box>
  )
}

export default ImgCarousel