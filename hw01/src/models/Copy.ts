import { AbstractBook } from "./AbstractBook";

export class Copy {
  private book: AbstractBook;
  private isAvailable: boolean;

  constructor(book: AbstractBook) {
    this.book = book;
    this.isAvailable = true;
  }

  getBook(): AbstractBook {
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
