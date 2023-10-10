export const PhotoView = () => {
    // for rendering photo grid
    return (
        <>
            <div className="photo-container d-flex row justify-content-between mt-5 mb-5">
                <div className="row">
                    <div className="col-md-4 mt-2 mb-2" >
                        <div className="photoGrid d-flex justify-content-center" style={{ padding: "10px" }}>
                            <div className="col-md-3 p-2">
                                Image
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}