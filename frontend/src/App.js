import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dasboard';

import LandingPage from './components/LandingPage';
import TopicForm from './components/TopicForm';

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/dashboard/:userName' element={<Dashboard/>}/>
    <Route path='/topicform/:userName' element={<TopicForm/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
