import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { adminOptionRoutes, adminRoute, courseRoute, loginRoute, navRoutes, signupRoute } from './Common/routes';
import { contactRoute } from './Common/routes';
import RequireAdmin from './Components/utils/RequireAdmin';
import Main from './Pages/wrapper/Main';
import AboutState from './context/admin/AboutState';
import IndustryState from './context/admin/IndustryState';
import ContactState from './context/admin/ContactState';
import SocialMediaState from './context/admin/SocialMediaState';

function App() {

  return (

    // Context api components
    <IndustryState>
    <AboutState>
    <ContactState>
    <SocialMediaState>


  {/* Main Router */}
    <BrowserRouter>
    
      <Routes>
        <Route element={<Main />} >
          {
            navRoutes.map(el => 
              <Route key={el.name} path={el.path} element={<el.element />} />
            )
          }

          {/* Other Routes */}
          <Route path={contactRoute.path} element={<contactRoute.element />} />
          <Route path={`${courseRoute.path}/:course`} element={<courseRoute.element />} />
          
        </Route>

        {/* Admin Pannel Routes */}
        <Route path={loginRoute.path} element={<loginRoute.element />} />
        <Route path={signupRoute.path} element={<signupRoute.element />} />

        <Route element={<RequireAdmin />} >
          <Route path={adminRoute.path} element={<adminRoute.element />}>
            {
              adminOptionRoutes?.map(option => 
                <Route key={option.name} path={option.path} element={<option.element />} />
              )
            }
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
    </SocialMediaState>
    </ContactState>
    </AboutState>
    </IndustryState>
  );
}

export default App;
