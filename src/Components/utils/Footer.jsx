import { Box, Link, List, ListItem, Typography } from '@mui/material'
import { darkNavyBg, lightNavyBg, navyTextColor } from '../../Common/constants'
import { socialMeadia } from '../../Common/socialPlatforms'
import { contacts } from '../../Common/ContactInfo'
import logo from '../../Common/images/logos/comityCrop.png'

const Footer = () => {
    
  return (
    <Box sx={{
        background: darkNavyBg,
        color: lightNavyBg,
        paddingBlock: {
            xs: 2,
            sm: 3
        },
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingInline: {
            xs: 2,
            sm: 6,
            md: 10
        }
    }} >

        {/* Logo and tag line section */}
        <Box sx={{
            pb: {
                xs: 5,
                sm: 0
            },
            '& > img': {
                width: 50,
                height: 50,
            },
            '& > p': {
                fontSize: 12,
                maxWidth: {
                    sm: 250,
                    md: 360
                }
            }
        }}>
        <img src={logo} alt="" />
        <Typography variant='h6' >Comity Edutech</Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>

        {/* Social Media Section */}
        <Box sx={{
            display: 'flex',
            gap: 1,
            pt: 2
        }} >
            {
                socialMeadia?.map(item =>
                    <Link target='blank' key={item.name} href={item.link}>
                    <Box sx={{
                        width: '30px',
                        height: '30px',
                        background: `url(${item.img})`,
                        backgroundSize: 'cover',
                        cursor: 'pointer',
                        ':hover': {
                            background: `url(${item.activeImg})`,
                            backgroundSize: 'cover',
                        }
                    }} /> 
                    </Link>
                )
            }

        </Box>
        </Box>

        {/* Contact Details Section */}
        <Box>
            <Typography variant='h6'>
            Contact Details
            </Typography>
            <List sx={{
                fontSize: 12,
                '& > li': {
                    paddingLeft: 0,
                    ':hover': {
                        '& > svg': {
                            color: navyTextColor
                        }
                    }
                }
            }}>
                {
                    contacts?.map(contact => 
                        <ListItem key={contact.content} >
                            <contact.icon /> {contact.content}
                        </ListItem>
                    )
                }
            </List>
        </Box>
    </Box>
  )
}

export default Footer