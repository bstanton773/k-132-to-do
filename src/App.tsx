import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from "./components/Navigation";
import ToDoDisplay from './components/ToDoDisplay';
import ToDoForm from './components/ToDoForm';


export default function App(){
    const [toDos, setToDos] = useState<string[]>([]);

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let form = event.target as HTMLFormElement;
        let task = form.task.value;
        setToDos([...toDos, task])
        form.task.value = '';
    }

    return (
        <>
            <Navigation username='Brian'/>
            <Container>
                <ToDoForm handleSubmit={handleFormSubmit}/>
                <ToDoDisplay toDos={toDos}/>
            </Container>
        </>
    )
}