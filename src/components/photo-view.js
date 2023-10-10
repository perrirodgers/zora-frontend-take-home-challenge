export const PhotoView = ({ photoData }) => {
    // for rendering photo grid
    return (
        <>
            <div className="photo-container d-flex row justify-content-between mt-5 mb-5">
                <div className="row">
                    {photoData?.length > 0 ? photoData?.map((data, index) => (

                        <div className="col-md-4 mt-2 mb-2" key={index}>
                            <div className="photoGrid d-flex justify-content-center" style={{ padding: "10px" }}>
                                <div className="col-md-3 p-2">
                                    <img src={data?.urls?.small} alt={data?.alt_description} className="photoImage" />
                                </div>
                            </div>
                        </div>

                    ))
                        :
                        <div className="text-center">
                            <h6>No photo media found</h6>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}