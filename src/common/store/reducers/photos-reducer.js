import { unsplashActions } from "../actions/action-types";

// To initialise default state for redux store
const getInitialState = () => ({
    allPhotos: [],
});

export const photosReducer = (state = getInitialState(), action) => {
    switch (action.type) {

        case unsplashActions.GET_PHOTOS:

            return {
                ...state,
                allPhotos: action.payload,
            }

        default:
            return state;

    }
}
