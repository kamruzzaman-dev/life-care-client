import React from 'react'
import Page404 from '../containers/Page404NotFound/Page404'

// product page
const Viewproduct  = React.lazy(() => import('../containers/UserPages/StorePages/StoreHistory'))
const selectProduct  = React.lazy(() => import('../containers/UserPages/StorePages/AddStore'))


/* ***************************** //admin// ************************** */


export const routers = [
    // { path: '/user/logout', name: 'Logout', permission: ['user','admin'], component: Logout },
    /****************************user routes *****************************************/
    { path: '*', exact: true, name: 'Error', permission: ['user','admin'], component: Page404 },
    // Dashboard
    { path: '/', exact: true,  name: 'Dashboard', permission: ['user'], component: selectProduct },
    
    //###### SETTINGS CATEGORY#########################################
    // SETTINGS=>Profile Section

    { path: '/select-product', name: 'Select Product',permission: ['user'], component: selectProduct,exact: true },
    { path: '/view-product', name: 'View Product',permission: ['user'], component: Viewproduct,exact: true },
   
  ] 