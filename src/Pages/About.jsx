import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../Components/utils/Footer'
// import { aboutMatter } from '../Common/aboutMatter'
import TopTemplete from '../Components/utils/TopTemplete'
import useApi from '../Hooks/useApi'
import { apiAboutUrl } from '../services/api.url'

function About() {

  const getAllAboutService = useApi(apiAboutUrl.aboutShowData);
  const [aboutMatter, setAboutMatter] = useState([]) 

  const getAllAbout = async () => {
    try {
      const res = await getAllAboutService.call();
      const abouts = res?.response?.result?.abouts;
      console.log(res.response.result?.abouts);
      setAboutMatter(abouts);
    } catch (err) {
      
    }
  }

  React.useEffect(() => {
      getAllAbout()
  }, [])

  return (
    <>
    {/* Top Templete */}
    <TopTemplete 
      background={"https://cdn.pixabay.com/photo/2015/08/05/13/55/children-876543_1280.jpg"} 
      title={"Comity Edutech and you"}
      tagLine={"Working together to deliver value to your business."}
    />

    {/* About Us Material Container */}
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      paddingBlock: {
        xs: 3,
        sm: 5,
        md: 7
      },
      paddingInline: {
        xs: 1,
        sm: 4,
        md: 12

      },
      '& > p': {
        fontSize: '1.25rem'
      },
    }} >

      {/* About Us Material */}
      {
        aboutMatter?.map((about) => 
          <Typography key={about._id}>{about.content}</Typography>
        )
      }
      <Typography>
      © 2024 COMITY. All rights reserved.
      </Typography>
    </Container>

      {/* Footer Section */}
    <Footer />
    </>
  )
}

export default About