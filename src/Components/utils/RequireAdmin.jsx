import React from 'react'
import { KEY_ACCESS_TOKEN, getItem } from '../../utils/localStorageManager'

const RequireAdmin = () => {
    const authToken = getItem(KEY_ACCESS_TOKEN);
  return (
    <div>RequireAdmin</div>
  )
}

export default RequireAdmin