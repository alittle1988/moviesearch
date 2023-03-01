import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function RemoveCategory(props) {
    const [removeCategory, setRemoveCategory] =useState("");
    const {onHandleRemoveCategory, categories} = props
    console.log(removeCategory)

    function removeCategoryFunc(param) {
        console.log(param)
        onHandleRemoveCategory(param)
        setRemoveCategory("")
    }
  return (
    <div className='removeCategory'>
        {/*<Form>
            <Form.Group>
                <Form.Label style={{color: "white"}}>Category to remove.</Form.Label>
                <Form.Control onChange={(e) => setRemoveCategory(e.target.value)} value={removeCategory} type='text' placeholder='Category'></Form.Control>
                <Button type='button' variant='primary' onClick={() => removeCategoryFunc(removeCategory)} style={{marginTop: 20}}>Submit</Button>
            </Form.Group>
  </Form>*/}

        <Form.Select style={{width: 250, marginLeft: 25, marginTop: 25}} onChange={(e) => setRemoveCategory(e.target.value)} value={removeCategory} >
            <option>Categories</option>
            {categories.map((category, index) => {
                return <option  key={index} value={category}>{category}</option>
            })}
        </Form.Select>
        <Button style={{margin: 20}} onClick={() => removeCategoryFunc(removeCategory)}>Submit</Button>
    </div>
  )
}

export default RemoveCategory