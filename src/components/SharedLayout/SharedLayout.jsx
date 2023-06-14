import Header from 'components/Header/Header';
import { Suspense } from 'react';
const { Outlet } = require('react-router-dom');

const SharedLayout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Suspense fallback={<div>Is Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
export default SharedLayout;
