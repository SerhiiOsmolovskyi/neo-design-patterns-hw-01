import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";


export class EBook extends AbstractBook {
  private url: string;

  constructor(title:string, year: number, author: Author, url:string) {
    super(title, year, author);
    this.url = url;
  }

  getDescription(): string {
    return `Електронна книга "${this.title}". Автор - ${this.author.getName()} (${this.year})p. - Доступна за посиланням: ${this.url}`;
  }
}
