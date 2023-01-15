import './App.css';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Shows from './Components/Shows';

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<div></div>}>
            <Main />
          </Suspense>
        }
      />
      <Route
        path='/show/:id'
        element={
          <Suspense fallback={<div></div>}>
            <Shows/>
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
