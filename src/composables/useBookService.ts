import { ref } from "vue";
import { Book } from "@/models/Book";
import {ApiClient} from "@/ApiClient";

export function useBookService() {

    const serviceRoute = '/book';

    const books = ref<Book[]>([]);
    const isLoading = ref<boolean>(false);
    const error = ref<string>("");

    const fetchBooks = (): Promise<Book[]> => {
        return ApiClient.getRequest<Book[]>(serviceRoute);
    }

    // try {
    //     isLoading.value = true;
    //     loadBooks().then((books) => {
    //         loadedBooks.value = books;
    //     });
    // } catch (error: any) {
    //     error.value = error;
    //     console.log(error);
    // }
    // isLoading.value = false;

    try {
        isLoading.value = true;
        fetchBooks().then((books: Book[]) => {
            books.value = books;
        });
    } catch (error: any) {
        error.value = error;
        console.log(error);
    } finally {
        isLoading.value = false;
    }



    return {
        isLoading,
        error,
        // loadedBooks
    }
}
