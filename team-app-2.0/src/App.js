import  './styles/App.css';
import { GroupedTeamMembers } from './pages/GroupedTeamMembers';
import { EmployeeOverview } from './pages/EmployeeOverview';
import NotFound from './components/NotFound';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import { EmployeeContextProvider } from './context/EmployeeContext';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeProfile from './pages/EmployeeProfile';

function App() {
  return (
    <main>
      <EmployeeContextProvider>
        <BrowserRouter>
        <Nav/>
        <Header/>
          <Routes>
            <Route 
            path='/'
            element = {<EmployeeOverview/>}/>
            <Route 
            path='/teams'
            element={<GroupedTeamMembers/>}/>
            <Route 
            path='/profile/:member'
            element={<EmployeeProfile/>}/>
            <Route path="*" 
            element={<NotFound/>}>
          </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </EmployeeContextProvider>
    </main>
  );
}

export default App;
