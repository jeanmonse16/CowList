import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Badges from "../pages/Badges";
import Badgenew from "../pages/Badgenew";
import Layout from "./Layout";
import Notfound  from "../pages/Notfound";
import Home from "../pages/Home";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetails from "../pages/BadgeDetailsContainer"

function App (){
   return (

       <BrowserRouter>
         <Layout>
          <Switch>
              <Route exact path="/badges" component={Badges} />
              <Route exact path="/badges/new" component={Badgenew} />
              <Route exact path="/badges/:badgeId" component={BadgeDetails} />
              <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
              <Route exact path="/" component={Home} />
              <Route component={Notfound}></Route>
          </Switch>
         </Layout>
       </BrowserRouter>
   )
}

export default App;