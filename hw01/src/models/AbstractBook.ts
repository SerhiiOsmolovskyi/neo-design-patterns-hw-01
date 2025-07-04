
import { Author } from "./Author";
export abstract class AbstractBook {
  // TODO: Implement the AbstractBook class
  protected title: string;
  protected year: number;
  protected author: Author;


  constructor(title:string, year:number, author:Author){
    this.title = title;
    this.year = year;
    this.author = author;
    this.author.addBook(this);
  }

  abstract getDescription(): string;

  public getTitle(): string{
    return this.title;
  }

  public getYear(): number{
    return this.year;
  }

  public getAuthor(): Author{
    return this.author;
  }
}
