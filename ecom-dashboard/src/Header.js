import { Container, NavDropdown} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header(){
    let user = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();

    function logout(){
        localStorage.clear();
        navigate("/login");
    }

    console.warn(user);
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                <Nav className="me-auto navbar_wrapper">
                    {localStorage.getItem("user-info") ? (
                        <>
                         <Link to="/">Product List</Link>
                         <Link to="/add">Add Product</Link>
                         <Link to="/update">Update Product</Link>
                        </>
                        ) : (
                            <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            </>
                        )
                    }
                </Nav> 
                {localStorage.getItem('user-info') ? (
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.ItemText onClick={logout}>Logout</NavDropdown.ItemText>
                    </NavDropdown>
                </Nav>
               ) : null}
                </Container>
            </Navbar>
        </div>
    )
}
export default Header