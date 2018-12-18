import Detail from '../Component/Detail';
import Profile from '../Component/Profile/Profile';
import Signin from '../Component/Signin';

const indexRoutes = [
    {path: '/post/:id', component: Detail},
    {path: '/login', component: Signin},
    {path: '/account/:publicKey', component: Profile},
];

export default indexRoutes;