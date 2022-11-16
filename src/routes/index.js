import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';

//Public routes (la nhung route khong can dang nhap)
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];
//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
