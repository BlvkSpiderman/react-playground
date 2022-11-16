import  './styles/App.css';
import { GroupedTeamMembers } from './pages/GroupedTeamMembers';
import { EmployeeOverview } from './pages/EmployeeOverview';
import NotFound from './components/NotFound';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfilePage from './pages/Employee Profile Page/ProfilePage';
import { useEmployeeContext } from './context/EmployeeContext';

function App() {
  return (
    <main>
        <BrowserRouter>
        <Nav/>
          <Routes>
            <Route 
            path='/'
            exact element ={
              <>
                <Header/>
                <EmployeeOverview/>
              </>
            }/>
            <Route 
            path='/teams'
            element={<GroupedTeamMembers/>}/>
            <Route 
            path='/profile/:member'
            element={<ProfilePage/>}/>
            <Route path="*" 
            element={<NotFound/>}>
          </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </main>
  );
}

export default App;
