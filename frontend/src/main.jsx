import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ImageSlider from './compmonents/clientSide/ImageSlider.jsx'
import LegalDocument from './compmonents/clientSide/LegalDocument.jsx'
import CompanyProfile from './compmonents/clientSide/CompanyProfile.jsx'
import PhotoGallery from './compmonents/clientSide/PhotoGallery.jsx'
import ContactUs from './compmonents/clientSide/ContactUs.jsx'


let router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<ImageSlider/>}/>
      <Route path='/companyProfile' element={<CompanyProfile/>}/>
      <Route path='/legalDocument' element={<LegalDocument/>}/>
      <Route path='/photoGallery' element={<PhotoGallery/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
