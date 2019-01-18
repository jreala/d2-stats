// Import the container if props and state need to be bound
import About from '../modules/about/components';
import StatCard from '../modules/stats/containers';
import TokenPage from '../modules/token/components';
import SupportUs from '../modules/supportUs/components';

const routes = [
    {
        displayName: 'About',
        path: '/',
        component: About,
        exact: true
    },
    {
        displayName: 'Stats',
        path: '/stats',
        component: StatCard
    },
    {
        displayName: 'Support Us',
        path: '/support-us',
        component: SupportUs
    },
    {
        displayName: 'Token',
        path: '/token',
        component: TokenPage,
        hidden: true
    }
];

export default routes;
