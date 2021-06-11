import Button from "../Button/Button";
import './Style.css'

function ListItem(props) {
    return (
        <div className='item'>
            <span>{props.task}</span>
            <Button text='Delete' handleClick={props.handleDelete}/>
        </div>
    );
}

export default ListItem;
