import React from 'react'
import { Container, Divider, Form, Button, Segment } from 'semantic-ui-react'

const FormX = () => (
     <Container text>
        <Segment>
           <Form>
            <Form.Field>
                <br/>
                <label>Firstname</label>
                <input placeholder='Firstname'/>
            </Form.Field>
            <Form.Field>
                <label>Lastname</label>
                <input placeholder='Lastname'/>
            </Form.Field>
            <Form.Input label="Middlename" placeholder='Middlename' />
            <Divider/>
            <Button color='teal' type="submit" basic>Submit</Button>
        </Form>
        </Segment>
    </Container>
)

export default FormX
