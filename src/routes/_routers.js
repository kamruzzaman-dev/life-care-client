import React from 'react'
import Page404 from '../containers/Page404NotFound/Page404'

// product page
const DonorProfile  = React.lazy(() => import('../containers/UserPages/Profile/Donor/Donor.profile'))
const Dashboard  = React.lazy(() => import('../containers/UserPages/Donor/dashboard/index'))
const BloodRequestSend  = React.lazy(() => import('../containers/UserPages/Donor/BloodRequestSend'))
const BloodRequestReceived  = React.lazy(() => import('../containers/UserPages/Donor/BloodRequestReceived')) 
const BloodRequest  = React.lazy(() => import('../containers/UserPages/Donor/BloodRequest')) 


/* ***************************** //admin// ************************** */


export const routers = [
  /****************************donar routes *****************************************/
    // Dashboard
    { path: '/', name: 'Dashboard', permission: ['donor'], component: Dashboard , exact: true, },
    /* donar section */
    { path: '/donor-info', name: "donor's profile" ,permission: ['donor'], component: DonorProfile, exact: true },
    // { path: '/doctor-info', name: "Doctor's profile",permission: ['doctor'], component: Viewproduct,exact: true },
    { path: '/donations-request-send', name: "donations request send",permission: ['donor'], component: BloodRequestSend, exact: true },
    { path: '/donations-request-receive', name: "donations request receive",permission: ['donor'], component: BloodRequestReceived, exact: true },
    { path: '/blood-request', name: "blood request",permission: ['donor'], component: BloodRequest, exact: true },
    { path: '*', exact: true, name: 'Error', permission: ['donor','admin'], component: Page404 },
    // { path: '/user/logout', name: 'Logout', permission: ['user','admin'], component: Logout },
  ]