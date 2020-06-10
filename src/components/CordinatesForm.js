import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useForm from '../utils/useForm';
import './CordinatesForm.css';

const CordinatesForm = (props) => {

    const [values, handleChange] = useForm({ lat: '', lang: '' });

    const submitForm = e => {
        e.preventDefault();
        if (!values.lat || !values.lang) return;
        props.NewPoints(values);
    }
    return (
        <Form className="container">
            <Form.Group controlId="basicLang">
                <Form.Label>Langtitude</Form.Label>
                <Form.Control value={values.lang} onChange={handleChange} type="number" placeholder="Enter Langtitude" name="lang" />
            </Form.Group>

            <Form.Group controlId="basicLat">
                <Form.Label>Latitude</Form.Label>
                <Form.Control value={values.lat} onChange={handleChange} type="number" placeholder="Enter Latitude" name="lat" />
            </Form.Group>
            <Button variant="primary" onClick={submitForm}>
                Add
  </Button>
        </Form>
    );
}

export default CordinatesForm;