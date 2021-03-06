import { LazyImage } from './lazy.image'
export function Card({ imageURL, name }) {
    return (
        <div className="movie-card flex flex-col xl:mb-6 lg:mb-6 md:mb-5 mb-4  xl:p-3 lg:p-3 md:p-2 p-2">
            <LazyImage src={imageURL} alt={name} className={'mb-1'} />
            <div>{name}</div>
            <div className="play-button">
                <div className="play"></div>
            </div>
        </div>
    )
}
