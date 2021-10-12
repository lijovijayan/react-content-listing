export class MoviesEffect {
    static fetchMovies(pageNumber, searchKey) {
        return new Promise((resolve, reject) => {
            try {
                const { page } = require(`../repository/CONTENTLISTINGPAGE-PAGE${pageNumber}.json`);
                return resolve({
                    page: page['page-num-requested'],
                    pageSize: page['page-size-requested'],
                    totalRecords: page['total-content-items'],
                    movies: page['content-items'].content.filter(movie => movie.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())),
                    searchKey: searchKey
                });
            } catch (err) {
                console.log(err);
                return resolve(new Error(err));
            }
        })
    }
}
