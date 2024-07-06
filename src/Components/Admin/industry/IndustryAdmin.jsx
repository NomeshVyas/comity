import { Container, Typography } from '@mui/material'
import React from 'react'
import { navyLogoColor } from '../../../Common/constants'
import { Stars } from '@mui/icons-material'
import IndustryCreate from './IndustryCreate'

const IndustryAdmin = () => {
  return (
    <Container
      sx={{
        "& > h2": {
          paddingBlock: 2,
          textAlign: "center",
        },
      }}
    >
      <Typography variant="h2" color={navyLogoColor}>
        Industry Admin Panel
      </Typography>

        {/* Create Industry Section */}
        <Typography
        variant="h5"
        sx={{
          pb: 2,
          color: navyLogoColor,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Stars />
        Create New Industry Section &rarr;
      </Typography>
      <IndustryCreate />


    </Container>
  )
}

export default IndustryAdmin