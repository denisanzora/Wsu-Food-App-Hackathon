
class lTile
{

}
export class tile
{
  constructor(image, name, distance, URL)
  {
    
    this.image = image;
    this.name = name;
    this.distance = distance;
    this.URL = URL;
    
  }
  
  get getDist()
  {
    return this.distance;
  }
  
}

var t = new tile("","",100,"");
var t2 = new tile("","",100,"");
var t3 = new tile("","",100,"");
var list = [t,t2,t3];


export function getTile(index)
{
    return list[index];
}


