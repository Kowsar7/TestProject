import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Posts from './Containers/Posts/Posts';
import Chart from './Containers/Chart/Chart';
import Quiz from './Containers/Quiz/Quiz'

function App() {
  return (
    <div>
      <Layout/>
      <Routes>
        <Route path="/Questions" element={<Quiz />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/" exact element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
