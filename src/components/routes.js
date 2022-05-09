// layouts
import DefaultLayout from './Layouts/subContent';
import Home from './Home/Home';
// import loginLayout from './layouts/loginLayout';

// views
import Views from './Views';

const routes = [
  {
    path: '/',
    // layout: DefaultLayout,
    exact: true,
    component: Views.HomeView,
  },
  {
    path: '/login',
    // layout: DefaultLayout,
    exact: true,
    component: Views.LoginView,
  }
];

export default routes;
