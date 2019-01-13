// Import the container if props and state need to be bound
import About from '../modules/about/components';
import StatCard from '../modules/stats/containers';
import TokenPage from '../modules/token/components/token';

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
        displayName: 'Token',
        path: '/token',
        component: TokenPage
    }
];

export default routes;
