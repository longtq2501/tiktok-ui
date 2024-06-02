//Layout

import HeaderOnly from "../components/Layout/HeaderOnly";
import Home from "../Pages/Home";
import Following from "../Pages/Following";
import Profile from "../Pages/Profile";
import Upload from "../Pages/Upload";
import Search from '../Pages/Search'

//Public Router
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
