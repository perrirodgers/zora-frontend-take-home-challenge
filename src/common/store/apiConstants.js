const BaseUrl = process.env.REACT_APP_BASE_URL;

// for api endpoints
export const UnsplashApiUrl = {
    GET_PHOTOS_API: BaseUrl + "/photos/",
    SEARCH_PHOTOS_API: BaseUrl + "/search/photos"
}