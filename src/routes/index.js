import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard'
import { Switch } from 'react-router-dom';

import Private from './Private';

function RoutesApp() {
  return (
    <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={ <Private><Dashboard/></Private>} />
    </Routes>
  )
}

export default RoutesApp;