import { Box } from "@mui/material"
import { industries } from "../../Common/industries"
import Industry from "../utils/Industry"
import { lightNavyBg } from "../../Common/constants"


const SecondBlock = () => {
  return (
  <Box sx={{
    borderBottom: `1px solid ${lightNavyBg}`

  }}>
    {
        industries?.map((industry, index) => 
            <Industry key={index} industry={industry}  />
        )
    }
  </Box>
  )
}

export default SecondBlock