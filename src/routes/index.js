import Home from '#/Pages/Home';
import trangchu from '#/Pages/trangchu';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/trangchu', component: trangchu },
]; // router khong can dang nhap cung xem duoc
const PrivateRoutes = []; //router can dang nhap moi xem duoc hoac vo thang trang login
export { publicRoutes, PrivateRoutes };
