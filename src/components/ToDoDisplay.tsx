import Table from 'react-bootstrap/Table';

type ToDoDisplayProps = {
    toDos: string[]
}


export default function ToDoDisplay({ toDos }: ToDoDisplayProps) {
    return (
        <>
            <h1 className="text-center mt-3">To Do List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {toDos.map( (task, index) => (
                        <tr key={task}>
                            <td>{index + 1}</td>
                            <td>{task}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}