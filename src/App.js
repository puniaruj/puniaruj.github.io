import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SecondaryContent from './components/SecondaryContent';
import FloatingIcons from './components/FloatingIcons';
import BoxLinks from './components/BoxLinks'; // Import the new clickable boxes
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import Certificates from './components/Certificates';

const App = () => {
    return (
        <Router>
            <div className="App">       
                <Header />              
                <FloatingIcons />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <MainContent />
                                <SecondaryContent />
                                <BoxLinks /> 
                            </div>
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <div>
                                <h1 className="page-title">Projects</h1>
                                <Projects />
                            </div>
                        }
                    />
                    <Route
                        path="/social-media"
                        element={
                            <div>
                                <h1 className="page-title">Social Media</h1>
                                <SocialMedia />
                            </div>
                        }
                    />
                    <Route
                        path="/certificates"
                        element={
                            <div>
                                <h1 className="page-title">Certificates</h1>
                                <Certificates />
                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
