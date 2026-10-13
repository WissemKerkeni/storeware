import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import './fonts.css'
import { de } from './content-de'
import { LandingPage } from './LandingPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage c={de} />
  </StrictMode>,
)
