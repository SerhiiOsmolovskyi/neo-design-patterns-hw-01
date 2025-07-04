import { Book } from "./Book";

export class Copy {
  private book: Book;
  private isAvailable: boolean;

  constructor(book: Book) {
    this.book = book;
    this.isAvailable = true;
  }

  getBook(): Book {
    return this.book;
  }

  borrow():boolean {
    if (!this.isAvailable) return false;
    this.isAvailable = false;
    return true;
  }

  return(): void {
    this.isAvailable = true;
  }

  isCopyAvailable(): boolean {
    return this.isAvailable;
  }
}
