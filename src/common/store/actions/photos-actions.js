
import { UnsplashApiUrl } from "../api-url";
import { Instance } from "../apiServices";
import { unsplashActions } from "./action-types";

export const getAllPhotos = () => {
    // for initiating api call for getting all photos from api & store them into redux store

    return async (dispatch) => {
        const response = await Instance(
            "GET",
            UnsplashApiUrl.GET_PHOTOS_API + `?client_id=UMzzccSsQ_ERk-nI7v_ySyFKxY8NYVY_IH5jb-q_gAU`,
            null,
        );

        if (response?.status === 200) {

            const { data } = response;
            dispatch({
                type: unsplashActions.GET_PHOTOS,
                payload: data,
            });

            return response;
        }
        else {
            // console.log(response);
            return response.response;
        }

    };
};
