import React from "react";
import { Container, Row } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import AddTitle from "./AddTitle";
import AddCategory from "./AddCategory";
import RemoveTitle from "./RemoveTitle";
import RemoveCategory from "./RemoveCategory";
import EditTitle from "./EditTitle";

function AdminPage(props) {
  const {
    onHandleAddMovieTitle,
    onHandleAddCategory,
    onHandleRemoveMovieTitle,
    onHandleRemoveCategory,
    categories,
    moviesList
  } = props;
  return (
    <>
      <Container>
        <Row>
          <ul className="adminList">
            <li>
              <Link to="/addCategory">Add Category</Link>
            </li>
            <li>
              <Link to="/removeCategory">Remove Category</Link>
            </li>
            <li>
              <Link to="/addTitle">Add Title</Link>
            </li>
            <li>
              <Link to="/removeTitle">Remove Title</Link>
            </li>
            
            <li><Link to="/editTitle">Edit Title</Link></li>
          </ul>
        </Row>
      </Container>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route
          path="/addTitle"
          element={<AddTitle moviesList={moviesList} addMovieTitle={onHandleAddMovieTitle} />}
        />
        <Route
          path="/addCategory"
          element={<AddCategory categories={categories} onHandleAddCategory={onHandleAddCategory} />}
        />
        <Route
          path="/removeTitle"
          element={
            <RemoveTitle
              onHandleRemoveMovieTitle={onHandleRemoveMovieTitle}
            ></RemoveTitle>
          }
        />
        <Route
          path="/removeCategory"
          element={
            <RemoveCategory
              onHandleRemoveCategory={onHandleRemoveCategory}
              categories={categories}
            ></RemoveCategory>
          }
        />
        <Route
        path="/editTitle"
        element={
            <EditTitle>
                
            </EditTitle>
        }
        />
      </Routes>
    </>
  );
}

export default AdminPage;
