import Profile from '../Component/Profile/Profile';
import Signin from '../Component/Signin';

const indexRoutes = [
    {path: '/login', component: Signin},
    {path: '/account/:publicKey', component: Profile},
];

export default indexRoutes;