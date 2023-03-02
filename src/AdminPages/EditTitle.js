import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function EditTitle(props) {
    const [editedTitle, setEditedTitle] = useState("");
    const {movieList} = props
  return (
    <div className='editTitle'>
        <Form>
            <Form.Group>
                <Form.Label style={{color: 'white'}}>Title to Edit</Form.Label>
                <Form.Control type='text' placeholder='Title'></Form.Control>
                <Button style={{margin: 20}}>Submit</Button>
            </Form.Group>
        </Form>
    </div>
  )
}

export default EditTitle