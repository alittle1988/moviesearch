import React from 'react'
import { Button, Form } from 'react-bootstrap'

function AddCategory() {
    
  return (
    <div className='addCategory'>
        <Form>
            <Form.Group>
                <Form.Label>Enter Category</Form.Label>
                <Form.Control type='text' placeholder='Category Name' />
                <Button type='submit' variant='primary' style={{marginTop: 20}}>Add Category</Button>
            </Form.Group>
        </Form>
    </div>
  )
}

export default AddCategory