// ** Icon imports
import Login from 'mdi-material-ui/Login'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import Abacus from 'mdi-material-ui/Abacus'
import ABtest from 'mdi-material-ui/AbTesting'
import AccountCheck from 'mdi-material-ui/AccountCheck'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { CreditCardOutline, CubeOutline, FormatLetterCase, GoogleCirclesExtended, Table } from 'mdi-material-ui';

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Applications',
      icon: Abacus,
      path: '/auth0-settings'
    }
    // ,
    // {
    //   title: 'Validate Settings',
    //   icon: ABtest,
    //   path: '/validate-settings'
    // }
    // ,
    // {
    //   title: 'Deploy Application',
    //   icon: AccountCheck,
    //   path: '/deploy-settings'
    // },
    ,
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    }
    // ,
    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
