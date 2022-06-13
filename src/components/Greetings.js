function Greetings(props) {
    let greeting = "";

    switch (props.lang) {
        case "de":
            greeting = "Hallo";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        case "en":
            greeting = "Hello";
            break;
        case "es":
            greeting = "Hola";
            break;
        default:
            greeting = "Konichiwa";
    }

    return (
        <div className="Greetings">
            {greeting} {props.children}
        </div>
            
    );
}
    
export default Greetings;