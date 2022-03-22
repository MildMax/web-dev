import './App.css';
import React from "react";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './components/Tuiter/tuiter.css';

import {Route,Routes,BrowserRouter} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import HomeScreen from "./components/Tuiter/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import EditProfile from "./components/Tuiter/ProfileScreen/EditProfile";
import Profile from "./components/Tuiter/ProfileScreen/Profile";

const App = () => {

    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<Labs/>}/>
                        <Route path="labs" element={<Labs/>}/>
                        <Route path="hello" element={<HelloWorld/>}/>
                        <Route path="tuiter" element={<Tuiter/>}>
                            <Route index element={<HomeScreen/>}/>
                            <Route path="explore" element={<ExploreScreen/>}/>
                            <Route path="profile" element={<Profile/>}/>
                            <Route path="editProfile" element={<EditProfile/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;


