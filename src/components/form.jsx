import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import { Button, Alert } from 'react-bootstrap';
import Axios from 'axios';

function NFTForm()  {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        console.log()
    };
    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ width: "70%", marginLeft: "15%", marginTop: "5%" }}>
                
                    <Form.Group controlId="formCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            placeholder="Enter Category"
                            required
                            type="text" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please Enter Category </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formImgURL">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            placeholder="Enter URL of Image"
                            required
                            type="URL"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please Enter URL of Image </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formArtworkName">
                        <Form.Label>Artwork Name</Form.Label>
                        <Form.Control
                            placeholder="Name your artwork"
                            required
                            type="text" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please Enter Artwork Name </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formArtistName">
                        <Form.Label>Artist Name</Form.Label>
                        <Form.Control placeholder="Enter Artist Name"
                            required
                            type="text" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please Enter Artist Name </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formMaterials">
                        <Form.Label>Materials</Form.Label>
                        <Form.Control placeholder="Enter Materials"
                            required
                            type="text" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please Enter Materials </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formDimensions">
                        <Form.Label>Dimensions</Form.Label>
                        <Form.Control placeholder="Enter Dimensions"
                            required
                            type="text" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please Enter Dimensions </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control placeholder="Enter Weight"
                            required
                            type="text" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please Enter Weight </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formStory">
                        <Form.Label>Story</Form.Label>
                        <Form.Control as="textarea" rows={4}
                            required
                            type="textarea" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please Enter Story </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formSignificance">
                        <Form.Label>Significance</Form.Label>
                        <Form.Control placeholder="Enter Significance"
                            required
                            type="text" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please Enter Significance </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formAvailability">
                        <Form.Label>Availability</Form.Label>
                        <Form.Control placeholder="Enter Availability"
                            required
                            type="text" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please Enter Availability </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date"
                            required
                            />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Please Enter Date </Form.Control.Feedback>
                    </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}


export default NFTForm
