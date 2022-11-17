import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import { HeaderOnly } from '~/layouts';
import config from '~/config';

//Public routes (la nhung route khong can dang nhap)
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.live, component: Live },
];
//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
