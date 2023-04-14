import React from 'react'
import Page404 from '../containers/Page404NotFound/Page404'

// product page
const DonorProfile  = React.lazy(() => import('../containers/UserPages/Profile/Donor/Donor.profile'))


/* ***************************** //admin// ************************** */


export const routers = [
    // { path: '/user/logout', name: 'Logout', permission: ['user','admin'], component: Logout },
    /****************************user routes *****************************************/
    { path: '*', exact: true, name: 'Error', permission: ['donor','admin'], component: Page404 },
    // Dashboard
    { path: '/', exact: true,  name: 'Dashboard', permission: ['user'], component: DonorProfile },
    
    //###### SETTINGS CATEGORY#########################################
    // SETTINGS=>Profile Section
    
    /* donar section */
    { path: '/donor-info', name: "donor's profile" ,permission: ['donor'], component: DonorProfile,exact: true },
    // { path: '/doctor-info', name: "Doctor's profile",permission: ['doctor'], component: Viewproduct,exact: true },
    // { path: '/donations-request-send', name: "donations request send",permission: ['donor'], component: Viewproduct,exact: true },
    // { path: '/donations-request-receive', name: "donations request receive",permission: ['donor'], component: Viewproduct,exact: true },
    // { path: '/blood-request', name: "blood request",permission: ['donor'], component: Viewproduct,exact: true },
  ]