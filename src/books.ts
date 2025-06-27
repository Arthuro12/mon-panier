export type Book = {
    title: string;
    authors: string[];
};

export const books: Book[] = [
  {
    title: "1984",
    authors: ["George Orwell"]
  },
  {
    title: "To Kill a Mockingbird",
    authors: ["Harper Lee"]
  },
  {
    title: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"]
  },
  {
    title: "Pride and Prejudice",
    authors: ["Jane Austen"]
  },
  {
    title: "The Lord of the Rings",
    authors: ["J.R.R. Tolkien"]
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    authors: ["J.K. Rowling"]
  },
  {
    title: "Les Misérables",
    authors: ["Victor Hugo"]
  },
  {
    title: "The Brothers Karamazov",
    authors: ["Fyodor Dostoevsky"]
  },
  {
    title: "One Hundred Years of Solitude",
    authors: ["Gabriel García Márquez"]
  },
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"]
  }
];

const bookPromise = new Promise<Book[]>((resolve, reject) => {
    setTimeout(() => {
        resolve(books);
    },700);
});

export async function loadBooks() {
    return bookPromise;
}