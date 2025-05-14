
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root and render app
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  
  // Wrap in error boundary to prevent white screen on errors
  try {
    root.render(<App />);
  } catch (error) {
    console.error("Error rendering app:", error);
    rootElement.innerHTML = '<div style="padding: 20px;">There was an error loading the application. Please check the console for details.</div>';
  }
}
