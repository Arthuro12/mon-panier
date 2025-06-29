// import { ref } from "vue";
//
// import { loadBooks } from "@/books";
//
// /** Composable to fetch books. */
// export function useLoadBooks() {
//     const loadedBooks = ref([]);
//     const isLoading = ref(false);
//     const error = ref("");
//
//     try {
//         isLoading.value = true;
//         loadBooks().then((books) => {
//             loadedBooks.value = books;
//         });
//     } catch (error: any) {
//         error.value = error;
//         console.log(error);
//     }
//     isLoading.value = false;
//
//     // We returns an object containing information about the loading process.
//     // This information is reactive and can be used to update the UI.
//     return {
//         isLoading,
//         error,
//         loadedBooks
//     }
// }