import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Register from './components/Register';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Hero />
          <Register />
          <SignUp />
          <Login />
          <Benefits />
          <Collaboration />
          <Services />
          <Pricing />
          <Roadmap />
          <Footer />
        </div>

        <ButtonGradient />
      </>
    </Provider>
  );
};

export default App;
