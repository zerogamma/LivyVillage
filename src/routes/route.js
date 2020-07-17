import * as Pages from '../pages'

const route = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Pages.Village,
    },
    {
        path: '/village',
        component: Pages.Village,
    },
]

export default route
