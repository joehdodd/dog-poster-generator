import React from 'react';

export default function WithDogImagesLoading(Component) {
    return function WithDogImagesLoadingComponent({ isFetching, ...props }) {
        return !isFetching ? <Component {...props} /> : <h4>Wow. Much Doge. Very Loading. Most Patience.</h4>
    }
}