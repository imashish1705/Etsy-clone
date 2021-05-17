import React, { Component } from 'react'
import NavigationBar from "./Components/Header/NavigationBar";
import Footer from "./Components/Footer/Footer";
import FooterLine from "./Components/Footer/FooterLine";
import HeroSection from "./Components/HeroArea/HeroSection"
import Layout from "./Components/Layout/Layout";
import RecentlyViewed from "./Components/RecentlyView/RecentlyView";
import { Route,Switch,} from 'react-router-dom';
import Discover from './Components/DiscoverSection/Discover';
import ShopOurSelections from "./Components/ShopOurSelection/ShopOurSelection";
import WhatIsEtsy from "./Components/WhatIsEsty/WhatisEtsy";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
class App extends Component {
  render() {
    return (
      <div>
      <NavigationBar/>
      <Layout>
      <HeroSection/>
      </Layout>
  <Switch>
     <Route exact path="/" />
  </Switch>
  <RecentlyViewed/>
  <Discover/>
  <ShopOurSelections/>
  <WhatIsEtsy/>
  <NewsLetter/>
  <Footer/>
  <FooterLine/>
  </div>
    )
  }
}
export default App;
