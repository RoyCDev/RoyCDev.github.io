import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import AboutPage from './pages/AboutPage.tsx';
import ProjectPage from './pages/ProjectPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AboutPage />} />
          <Route path="projects/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)