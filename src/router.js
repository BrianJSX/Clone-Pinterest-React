import Home from './pages/Home';
import FollowPage from './pages/FollowPage';
import LoginPage from './pages/LoginPage';
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
    {
        exact:  true,
        component: LoginPage,
        path: '/login',
    },
];
export default ROUTER;
