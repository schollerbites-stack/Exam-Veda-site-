import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { downloadExamVeda } from './utils/download';

// Expose downloadExamVeda on window for global/inline HTML usage
if (typeof window !== 'undefined') {
  (window as unknown as { downloadExamVeda: typeof downloadExamVeda }).downloadExamVeda = downloadExamVeda;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

