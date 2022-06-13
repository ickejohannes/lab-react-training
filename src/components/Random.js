function Random(props) {    
        return (
            <div>
                Random value between {props.min} and {props.max} =&gt; {Math.floor(Math.random() * (props.max - props.min + 1) + props.min)}
            </div>
            
        )
    }
    
    export default Random