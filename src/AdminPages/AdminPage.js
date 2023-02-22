import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import AddTitle from './AddTitle';
import App from '../App';
import AddCategory from './AddCategory';

function AdminPage(props) {
    const {onHandleAddMovieTitle} = props
  return (<>
    <Container>
        <Row>
            <ul className="adminList">
                <li><Link to="/addCategory" >Add Category</Link></li>
                <li>Remove Category</li>
                <li><Link to="/addTitle">Add Title</Link></li>
                <li>Remove Title</li>
            </ul>
        </Row>
    </Container>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/addTitle' element={<AddTitle addMovieTitle={onHandleAddMovieTitle} />} />
        <Route path='/addCategory' element={<AddCategory />} />
    </Routes>
    </>)
}

export default AdminPage