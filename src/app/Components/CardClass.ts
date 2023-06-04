

export class CardClass {
  tittle: string;
  content: string;
  status: string;
  id: number;
  age: number;
  image: ImageData;
  constructor(tittle: string, content: string, status: string, id: number, age: number, image: ImageData)
  {
  this.tittle = tittle;
  this.content = content;
  this.status = status;
  this.id = id;
  this.age = age;
  this.image = image;
  }
}
