function Profilecard(props) {
    const { title, handle, img } = props
    return (
        <div>
            <img src={img} alt="profile card image" />
            <h2>Title is {title}</h2>
            <h2>Handle is {handle}</h2>
        </div>
    )
}

export default Profilecard