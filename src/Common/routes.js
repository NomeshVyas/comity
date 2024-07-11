import About from "../Pages/About";
import Capabilities from "../Pages/Capabilities";
import Carriers from "../Pages/Carriers";
import Home from "../Pages/Home";
import Industries from "../Pages/Industries";
import Contact from "../Components/utils/Contact";
import Course from "../Components/utils/Course";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Admin from "../Pages/Admin";
import NavAdmin from "../Components/Admin/navbar/NavAdmin";
import AboutAdmin from "../Components/Admin/about/AboutAdmin";
import IndustryAdmin from "../Components/Admin/industry/IndustryAdmin";
// import ContactAdmin from "../Components/Admin/contact/ContactAdmin";
import FooterAdmin from "../Components/Admin/footer/FooterAdmin";

export const homeRoute = {
    name: 'home',
    path: '/',
    title: 'Home',
    element: Home
}

export const contactRoute = {
    name: 'contact',
    path: '/contact',
    title: 'Contact',
    element: Contact
}

export const courseRoute = {
    name: 'course',
    path: '/course',
    title: 'Course',
    element: Course
}

// Plz make sure the order of routes don't change in any updation bcoz we use its index value in home page
export const navRoutes = [
    {
        name: 'home',
        path: '/',
        title: 'Home',
        element: Home
    },
    {
        name: 'industries',
        path: '/industries',
        title: 'Industries',
        element: Industries
    },
    {
        name: 'capabilities',
        path: '/capabilities',
        title: 'Capabilities',
        element: Capabilities
    },
    {
        name: 'about',
        path: '/about',
        title: 'About Us',
        element: About
    },
    {
        name: 'careers',
        path: '/carriers',
        title: 'Careers',
        element: Carriers
    },
]

// Login Signup pages for Admin Pannel Authentication
export const loginRoute = {
    name: 'login',
    path: '/login',
    title: 'Login',
    element: Login
}

export const signupRoute = {
    name: 'signup',
    path: '/signup',
    title: 'SignUp',
    element: Signup
}

export const adminRoute = {
    name: 'admin',
    path: '/admin',
    title: 'Admin',
    element: Admin
}

export const adminOptionRoutes = [
  {
    name: "navAdmin",
    path: `${adminRoute.path}/nav`,
    title: "Navbar",
    element: NavAdmin,
  },
  {
    name: "aboutAdmin",
    path: `${adminRoute.path}/about`,
    title: "About",
    element: AboutAdmin,
  },
  {
    name: "industryAdmin",
    path: `${adminRoute.path}/industry`,
    title: "Industry",
    element: IndustryAdmin,
  },
  {
    name: "FooterAdmin",
    path: `${adminRoute.path}/footer`,
    title: "Footer",
    element: FooterAdmin,
  },
];