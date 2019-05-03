import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container } from 'reactstrap';

class Contact extends Component {
    render() {
        return (
            <div className="container-fluid full-height">
                <Container>
                    <h1 className="display-4"> Contact Me</h1>
                    <Form method="POST" action="https://formspree.io/richardgtherrien+personal-websiteform@gmail.com">
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Please provide an email so I can get back to you" required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleText">Message</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>

                        <FormGroup check className="text-md-right">
                            <Label check>
                                <Input type="checkbox" required />{' '}
                                <a href='/terms'>I agree to the terms & conditions </a> 
                            </Label>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Contact;
