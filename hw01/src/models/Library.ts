import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";
// import { Book } from "./Book";
// import { EBook } from "./EBook";

export class Library {
  private authors: Author[] = [];
  private books: AbstractBook[] = [];
  private copies: Copy[] = [];
  private readers: Reader[] = [];

  addAuthor (author: Author): void {
    this.authors.push(author);
  }

  addBook (book: AbstractBook): void {
    this.books.push(book);
  }
  addCopy (copy: Copy): void {
    this.copies.push(copy);
  }
  addReader (reader: Reader): void {
    this.readers.push(reader);
  }
  
  findAvailableCopies(): Copy[] {
    return this.copies.filter(copy => copy.isCopyAvailable());
  }

  findBooksByAuthor(authorName: string): AbstractBook[] {
    return this.books.filter(book => book.getAuthor().getName() === authorName);
  }
}
