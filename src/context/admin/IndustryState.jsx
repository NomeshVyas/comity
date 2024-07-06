import React, { useState } from 'react'
import IndustryContext from './industryContext.js'

const IndustryState = (props) => {

  const [industryCreate, setIndustryCreate] = useState({
    name: "",
    desc: "",
    scheme: "",
  });




  return (
    <IndustryContext.Provider value={{
      industryCreate,
      setIndustryCreate
    }} >
        {props.children}
    </IndustryContext.Provider>
  )
}

export default IndustryState