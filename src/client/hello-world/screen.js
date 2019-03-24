import React from "react";
import {
  Page,
  Container,
  VBox,
  BannerHeader,
  AekReactRouter,
  RouterView,
  Button,
  Segment,
  Listview,
  ListviewItem as Item,
  panel,

} from "@ombiel/aek-lib";


 const router = new AekReactRouter({useHash:false});

export default class Homescreen extends React.Component {

  componentDidMount() {

  }
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.

  render() {


    return (
// main menu interface =]
      <Container>
  <div>
  <RouterView router={router}>
  <Page path="/" style={{backgroundColor:"#e5e1d6"}}>
    <Segment style={{height:"530px"}}>
    
      <VBox>
        
        <a href = "#/rda">
        <img src="https://portal-na.campusm.exlibrisgroup.com/assets/campusM/Hackathon5/eat-live.jpg" alt="HTML tutorial" width="100%px" height="99%px"></img></a>
        <a href = "#/non"> 
        <img src="https://portal-na.campusm.exlibrisgroup.com/assets/campusM/Hackathon5/wsu-vendors.jpg" alt="HTML tutorial" width="100%px" height="99%px"></img></a>
      </VBox>
    </Segment>
    </Page>
            <RDA path="/rda"/>
            <NonRDA path="/non"/>
    </RouterView>
  </div>
)
      </Container>
    );
  }
}
export class RDA extends React.Component {

  componentDidMount() {

  }
// RDA Dining Halls Interface <3
  render() {
    //var array = bubbleSort(listTile);
    return (

      <Container>
        <VBox>
        <Page path="#/rda" style={{backgroundColor:"#e5e1d6"}}>
          <BannerHeader style={{backgroundColor:"#981e32"}} key="header" data-flex={0}><span style={{color: "white", textAlign:"center"}}>Dining Halls</span></BannerHeader>
           <Listview>
           <Item heading="Northside Café" icon="food" href="http://dining.wsu.edu/dining-options/northside-cafe">You are __ feet away.</Item>
           <Item heading="Hillside Café" icon="food" href="http://dining.wsu.edu/dining-options/hillside-cafe">You are __ feet away.</Item>
           <Item heading="Southside Café" icon="food" href="http://dining.wsu.edu/dining-options/southside-cafe">You are __ feet away.</Item>
           <Item heading="Carlita's" icon="food" href="https://dining.wsu.edu/dining-options/carlitas/">You are __ feet away.</Item>
           </Listview>
           <div style={{textAlign: "center"}}>
           <Button icon="home" basic><a href= "#/">Home</a></Button>
           </div>
          </Page>
        </VBox>

      </Container>

    );

  }

}
export class NonRDA extends React.Component {

  componentDidMount() {

  }

  render() {
    //var array = bubbleSort(listTile);
    return (
      
      <Container>
        <VBox>
        <Page path="#/non" style={{backgroundColor:"#e5e1d6"}}>
          <BannerHeader style={{backgroundColor:"#981e32"}} key="header" data-flex={0}><span style={{color: "white", textAlign:"center"}}>Vendors</span></BannerHeader>
           <Listview>
           <Item heading="Freshens" icon="food" href="https://chinook.wsu.edu/dining/freshens/">You are __ feet away.</Item>
           <Item heading="Gridiron" icon="food" href="http://www.gridiron-burgers.com">You are __ feet away.</Item>
           <Item heading="Panda Express" icon="food" href="http://www.pandaexpress.com">You are __ feet away.</Item>
           <Item heading="Pizza Pipeline" icon="food" href="http://web.pizzapipeline.com/">You are __ feet away.</Item>
           <Item heading="Subway" icon="food" href="http://local.subway.com/FWPCons/frmSiteMainPage.aspx?CC=USA&LC=ENG&SS=45681-0">You are __ feet away.</Item>
           </Listview>
           <div style={{textAlign: "center"}}>
           <Button icon="home" basic><a href= "#/">Home</a></Button>
           </div>
          </Page>
        </VBox>
      </Container>

    );

  }

}
// Magic. Do not touch. Loading...
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
// Magic. Do not touch.
