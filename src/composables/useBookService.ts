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

    // Utilise le this du service/composable, est-ce vraiment utile dans le contexte ?
    // function fetchBooks2(): Promise<Book[]> {
    //     return ApiClient.getRequest<Book[]>(serviceRoute);
    // }

    try {
        isLoading.value = true;
        fetchBooks().then((booksLoad: Book[]) => {
            books.value = booksLoad;
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
        books,
    }
}
