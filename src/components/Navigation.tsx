import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


type Props = {
    username: string
}

export default function Navigation({ username }: Props) {
    return (
        <Navbar className='bg-success' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand>To Do List - {username ? username : 'New User'}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}