import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AddCategory(props) {
  const [newCategory, setNewCategory] = useState("");
  const { onHandleAddCategory } = props;
  console.log(newCategory);
  const addCategory = (category) => {
    onHandleAddCategory(category);
    setNewCategory("");
  };

  return (
    <div className="addCategory">
      <Form>
        <Form.Group>
          <Form.Label>Enter Category</Form.Label>
          <Form.Control
            onChange={(e) => {
              setNewCategory(e.target.value);
            }}
            value={newCategory}
            type="text"
            placeholder="Category Name"
          />
          <Button
            type="button"
            onClick={() => addCategory(newCategory)}
            variant="primary"
            style={{ marginTop: 20 }}
          >
            Add Category
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default AddCategory;
