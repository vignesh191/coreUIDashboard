import React, { lazy } from 'react'
import AssetEntitlementTrends from '../charts/AssetEntitlementTrends.js'
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))


const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown
        w1data={[65, 59, 84, 84, 51, 55, 40]}
        w2data={[1, 18, 9, 17, 34, 22, 11]}
        w3data={[78, 81, 80, 45, 34, 12, 40]}
        w4data={[78, 81, 80, 45, 34, 12, 40]}
      />
      <AssetEntitlementTrends />
    </>
  )
}

export default Dashboard
