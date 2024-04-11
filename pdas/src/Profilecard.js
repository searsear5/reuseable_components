function Profilecard(props) {
    const { title, handle, img, description } = props
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={img} alt="profile card image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-5">{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>


        </div>
    )
}

export default Profilecard