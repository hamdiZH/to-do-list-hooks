import './Style.css'
import Button from "../Component/Button/Button";
import ListItem from "../Component/ListItem/ListItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';


function HomeScreen() {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
            console.log(response);

            setList(response.data.splice(0, 15))
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container'>
            <h1>To Do List By Hooks</h1>
            <section className='input-section'>
                <div className='input-box'>
                    <input
                        className='add-task-input'
                        text='text'
                        placeholder='Enter New Task'
                        onChange={(event) => {
                            setValue(event.target.value);
                        }}
                        value={value}
                    />
                    {error ? <span>{error}</span> : null}
                </div>

                <Button text='Add'
                        isPurple={true}
                        handleClick={() => {
                            if (value) {
                                const newTask = [{
                                    title: value,
                                    id: uuidv4()
                                }, ...list]
                                setList(newTask);
                                setValue('');
                                setError('');
                            } else {
                                setList(list);
                                setError('Please Enter a Task');
                            }
                        }}
                />
            </section>


            <section className='items-section'>
                {list?.length ? (
                    list.map(item => (
                        <ListItem
                            task={item.title}
                            key={item.id}
                            handleDelete={() => {
                                const filteredItems = list.filter(filterItem => filterItem.id != item.id);
                                setList(filteredItems);
                            }}
                        />
                    ))
                ) : (<span>Loading</span>)};
            </section>
        </div>
    );
}

export default HomeScreen;
