function IdCard(props) {
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return (
        <div className = "Id-card">
            <img src={props.picture} alt="user" />
            <p className = "Id-card-paragraph">
                <b>First name:</b> {props.firstName}
                <br></br>
                <b>Last name:</b> {props.lastName}
                <br></br>
                <b>Gender:</b> {props.gender}
                <br></br>
                <b>Height:</b> {props.height}
                <br></br>
                <b>Birth:</b> {weekday[props.birth.getDay()]} {props.birth.getDate()} {props.birth.getMonth()} {props.birth.getFullYear()}
            </p>
        </div>
        
    )
}

export default IdCard