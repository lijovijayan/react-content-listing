import React, { useState, useEffect, useRef } from 'react'
import '../styles/lazy.image.styles.scss';

const placeHolder = process.env.PUBLIC_URL + '/images/placeholder_for_missing_posters.png'

export const LazyImage = ({ src, alt, className = '' }) => {
  const [imageSrc, setImageSrc] = useState(placeHolder)
  const [imageRef, setImageRef] = useState()
  const observer = useRef()

  const onLoad = (event) => {
    event.target.classList.add('loaded')
  }

  const onError = (event) => {
    event.target.classList.add('failed-loading')
    setImageSrc(placeHolder)
    observer.current?.unobserve(imageRef)
    observer.current = null;
  }

  useEffect(() => {
    if (imageRef && imageSrc !== src && observer.current !== null) {
      if (IntersectionObserver) {
        observer.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if ((entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src)
                observer.current.unobserve(imageRef)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        )
        observer.current.observe(imageRef)
      } else {
        setImageSrc(src)
      }
    }
    return () => {
      if (observer.current && observer.current.unobserve) {
        observer.current.unobserve(imageRef)
        observer.current = null;
      }
    }
  }, [src, imageSrc, imageRef])
  return (
    <img
      className={`${className} lazy-image`}
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
      draggable={false}
    />
  )
}