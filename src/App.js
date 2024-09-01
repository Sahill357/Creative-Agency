// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/Layout/NavBar';
// import HeroSection from './components/Layout/HeroSection';
// import ProjectSection from './components/Layout/ProjectSection';
// import Stories from './components/Layout/Stories';
// import Footer from './components/Layout/Footer';
// import About from './Pages/About';

// const App = () => {
//   return (
//     <Router>
//       <>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <HeroSection />
//               <ProjectSection />
//               <Stories />
//               <Footer />
//                <About/>
//             </>
//           } />
        
//         </Routes>
//       </>
//     </Router>
//   );
// };

// export default App;


 
import Routes from './routes';

 


const App = () =>  <Routes />
 

export default App



