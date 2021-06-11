import './Style.css'

function Button (props) {
    return(
      <button className={props.isPurple? 'add-btn' : 'delete-btn'} onClick={props.handleClick}>
          {props.text}
      </button>
    );
}

export default Button;
