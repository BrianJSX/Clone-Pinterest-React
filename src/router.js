import Home from './pages/Home';
import FollowPage from './pages/FollowPage';
const ROUTER = [
    {
        exact:  true,
        component: Home,
        path: '/',
    },
    {
        exact:  true,
        component: FollowPage,
        path: '/flowPage',
    },
];
export default ROUTER;
