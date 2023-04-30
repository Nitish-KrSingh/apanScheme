function FormCard(props) {
    return (
        <section className="mb-5">
            <div className="mask d-flex align-items-center mt-5">
                <div className="container mh-100">
                    <div className="row d-flex justify-content-center align-items-center mh-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card " style={{"border-radius" :"15px" , height: "450px" }}>
                                <div className="card-body p-5">
                                    {props.children}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormCard;