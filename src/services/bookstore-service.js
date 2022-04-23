export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Rand McNally 2022 Large Scale Road Atlas',
                author: 'Rand McNally',
                price: 16,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71e4P30gNVL._AC_UL604_SR604,400_.jpg',
                url: 'https://www.amazon.com/Rand-McNally-Large-Scale-Atlas/dp/0528023780/ref=zg_bs_books_5/132-9758332-5270757?pd_rd_i=0528023780&psc=1'
            },
            {
                id: 2,
                title: 'The Alchemist, 25th Anniversary: A Fable About Following Your Dream',
                author: 'Paulo Coelho',
                price: 3,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._AC_UL604_SR604,400_.jpg',
                url: 'https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005/ref=zg_bs_books_6/132-9758332-5270757?pd_rd_i=0062315005&psc=1'
            }
        ]
    }
}