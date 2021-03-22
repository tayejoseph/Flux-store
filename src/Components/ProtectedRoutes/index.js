import React from 'react'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((s) => s)
  console.log(user, 'SDksdsdkl')
  return children
}
export default ProtectedRoute
