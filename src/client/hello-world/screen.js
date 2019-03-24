import React from "react";

import {
  Page,
  Container,
  VBox,
  BannerHeader,
  BasicSegment,
  AekReactRouter,
  Header,
  Input,
  RouterView,
  Link,
  Button,
  Divider,
  SectionDivider,
  HeaderDivider,
  FittedDivider,
  HiddenDivider,
  VerticalDivider,
  CBox,
  Segment,
  HBox,
  
  
} from "@ombiel/aek-lib";

class tile
{
  constructor(image, name, distance, URL)
  {
    
    this.image = image;
    this.name = name;
    this.distance = distance;
    this.URL = URL;
    
  }
}
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

//tile data block
var t = new tile("","",100,"");
var t2 = new tile("","",1,"");
var t3 = new tile("","",10,"");
var listTile = [t,t2,t3];


function getDist(tile)
{
  return tile.distance;
}
function getImage(tile)
{
  return tile.image;
}
function getName(tile)
{
  return tile.name;
}
function getURL(tile)
{
  return tile.URL;
}

function bubbleSort(array)
{
  for(var i = 0; i < array.length; i++) {
    for(var j = 1; j < array.length; j++) {
      if(getDist(array[j - 1]) > getDist(array[j])) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}


 bubbleSort(listTile);


 const router = new AekReactRouter({useHash:false});

export default class Homescreen extends React.Component {
  
  componentDidMount() {

  }

  render() {

    
    return (
      
      <Container>
        <VBox>
          
          
          <RouterView router={router}>
            <Page path="/">


            <BannerHeader theme="alt" key="header" data-flex={0}>RDA Cafeterias</BannerHeader>

              <Segment style={{height:"200px"}}>
      <HBox>
        <CBox>
          <BasicSegment>
              <p>hi</p>
              <Button href = "#/new">click me</Button>
          </BasicSegment>
          </CBox>
        <VerticalDivider size="0"></VerticalDivider>
        <CBox>
        <BasicSegment>
              <p>hi</p>
              <Button href = "#/new">click me</Button>
          </BasicSegment>
        </CBox>
      </HBox>
    </Segment>

            </Page>
            <Example path="/new"/>
          </RouterView>
         
          
          
        </VBox>
        
      </Container>
      
    );

  }

}
export class Example extends React.Component {
  
  componentDidMount() {

  }

  render() {
    //var array = bubbleSort(listTile);
    return (
      
      <Container>
        <VBox>
        <Page path="#/new" >
          <BannerHeader theme="alt" key="header" data-flex={0}>RDA</BannerHeader>
         
           <BasicSegment>
            
            <p>this is {getDist(listTile[0])}</p>
            <p>this is {getDist(listTile[1])}</p>
            <p>this is {getDist(listTile[2])}</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            <p>Sed posuere consectetur est at lobortis.</p>
          </BasicSegment>
          </Page>
        </VBox>
        
      </Container>
      
    );

  }

}
// var t = new tile("","",10.10,"");
// var t2 = new tile("","",100,"");
// var t3 = new tile("","",50,"");






//list of tiles

