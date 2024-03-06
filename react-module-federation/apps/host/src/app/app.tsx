import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Container from '../components/container';

const Dashboard = React.lazy(() => import('dashboard/Module'));
const LiveTracking = React.lazy(() => import('live-tracking/Module'));
const Notifications = React.lazy(() => import('notifications/Module'));

enum MFERoutes {
  Dashboard = '/',
  Reports = '/reports',
  LiveTracking = '/live-tracking',
  Analytics = '/analytics',
  Vehicles = '/vehicles',
  Notifications = '/notifications',
}

const routesConfig: {
  label: string;
  link: MFERoutes;
}[] = [
  {
    label: 'Dashboard',
    link: MFERoutes.Dashboard,
  },
  {
    label: 'Live Tracking',
    link: MFERoutes.LiveTracking,
  },
  {
    label: 'Vehicles',
    link: MFERoutes.Vehicles,
  },
  {
    label: 'Analytics',
    link: MFERoutes.Analytics,
  },
];

export function App() {
  return (
    <Container items={routesConfig}>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading...">
              <Dashboard />
            </React.Suspense>
          }
        />

        <Route
          path="/live-tracking"
          element={
            <React.Suspense fallback="Loading...">
              <LiveTracking />
            </React.Suspense>
          }
        />

      </Routes>
      <React.Suspense fallback={<>Loading...</>}>
        <Notifications />
      </React.Suspense>
    </Container>
  );
}

export default App;
