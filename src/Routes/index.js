import Detail from '../Component/Detail';
import Profile from '../Component/Profile/Profile';

const indexRoutes = [
    {path: '/post/:id', component: Detail},
    {path: '/', component: Profile},
];

export default indexRoutes;