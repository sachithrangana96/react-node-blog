import Home from './Home/Home';
import login from './Layouts/Auth/login';
import DefaultLayout from './Layouts/Content';
import authLayout from './Layouts/Auth/authLayout';
const Homes = DefaultLayout(Home);
const Login = authLayout(login)

export default {
  HomeView: Homes,
  LoginView: Login
};
