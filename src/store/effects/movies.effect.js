export class MoviesEffect {
    static async fetchMovies(pageNumber, searchKey) {
        try {
            const { page } = await (await fetch(`${process.env.PUBLIC_URL}/repository/CONTENTLISTINGPAGE-PAGE${pageNumber}.json`)).json()
            return {
                page: page['page-num-requested'],
                pageSize: page['page-size-requested'],
                totalRecords: page['total-content-items'],
                movies: page['content-items'].content.filter(movie => movie.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())),
                searchKey: searchKey
            };
        } catch (err) {
            return new Error(err);
        }
    }
}
