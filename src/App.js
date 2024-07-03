import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { adminRoute, courseRoute, loginRoute, navRoutes, signupRoute } from './Common/routes';
import DrawerNavbar from './Components/navbar/DrawerNavbar';
import { contactRoute } from './Common/routes';

function App() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(prev => !prev);
  }

  return (
    <BrowserRouter>

      <Navbar toggleDrawer={toggleDrawer} />
      <DrawerNavbar openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
    
      <Routes>
        {
          navRoutes.map(el => 
            <Route key={el.name} path={el.path} element={<el.element />} />
          )
        }

        {/* Other Routes */}
        <Route path={contactRoute.path} element={<contactRoute.element />} />
        <Route path={`${courseRoute.path}/:course`} element={<courseRoute.element />} />

        {/* Admin Pannel Routes */}
        <Route path={loginRoute.path} element={<loginRoute.element />} />
        <Route path={signupRoute.path} element={<signupRoute.element />} />
        <Route path={adminRoute.path} element={<adminRoute.element />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
