// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/dpats/new" page={NewDpatPage} name="newDpat" />
      <Route path="/dpats/{id:Int}/edit" page={EditDpatPage} name="editDpat" />
      <Route path="/dpats/{id:Int}" page={DpatPage} name="dpat" />
      <Route path="/dpats" page={DpatsPage} name="dpats" />
      <Route path="/fmeas/new" page={NewFmeaPage} name="newFmea" />
      <Route path="/fmeas/{id:Int}/edit" page={EditFmeaPage} name="editFmea" />
      <Route path="/fmeas/{id:Int}" page={FmeaPage} name="fmea" />
      <Route path="/fmeas" page={FmeasPage} name="fmeas" />
      <Route path="/profile" page={ProfilePage} name="profile" />
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/roadmap" page={RoadmapPage} name="roadmap" />
      <Route path="/bio" page={BioPage} name="bio" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
