import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import Axios from 'axios'

function NFTForm() {
  const initialState = {
    category: 'Art',
    name: '',
    artist: '',
    imageUrl: '',
    materials: '',
    dimensions: '',
    weight: '',
    story: '',
    significance: '',
    availability: '',
    date: '',
  }
  const url = 'http://localhost:3001/'
  var formDate = new Date().toISOString().split('T')[0]

  const [validated, setValidated] = useState(false)
  const [newForm, setForm] = useState(initialState)

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    console.log(form)

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    await Axios.post(url, {
      category: newForm.category,
      name: newForm.name,
      artist: newForm.artist,
      imageUrl: newForm.imageUrl,
      //imageUrl: '/Users/manikjain/Desktop/TADODAHO.png',
      materials: newForm.materials,
      dimensions: newForm.dimensions,
      weight: newForm.weight,
      story: newForm.story,
      significance: newForm.significance,
      availability: newForm.availability,
      date: newForm.date,
    }).then((res) => {
      alert('Data has been successfully stored')
    })
  }

  useEffect(() => {}, [newForm])

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setForm({ ...newForm, [name]: value })
  }

  return (
    <div>
      <Form
        validated={validated}
        onSubmit={handleSubmit}
        style={{ width: '70%', marginLeft: '15%', marginTop: '5%' }}
      >
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={newForm.category}
            onChange={handleOnChange}
            required
          >
            <option>Art</option>
            <option disabled="true">Music</option>
            <option disabled="true">Identity</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please Enter Category{' '}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formImgURL">
          <Form.Label>Image File</Form.Label>
          <Form.File
            id="formImgURL"
            required
            name="imageUrl"
            value={newForm.imageUrl}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group controlId="formArtworkName">
          <Form.Label>Artifact Name</Form.Label>
          <Form.Control
            placeholder="Name your artwork"
            required
            name="name"
            value={newForm.name}
            onChange={handleOnChange}
            type="text"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Artifact Name{' '}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formArtistName">
          <Form.Label>Artist Name</Form.Label>
          <Form.Control
            placeholder="Enter Artist Name"
            required
            name="artist"
            value={newForm.artist}
            onChange={handleOnChange}
            type="text"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Artist Name{' '}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formMaterials">
          <Form.Label>Materials</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            required
            name="materials"
            value={newForm.materials}
            onChange={handleOnChange}
            type="textarea"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Materials{' '}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formDimensions">
          <Form.Label>Dimensions</Form.Label>
          <Form.Control
            placeholder="Enter Dimensions"
            required
            name="dimensions"
            value={newForm.dimensions}
            onChange={handleOnChange}
            type="text"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Dimensions{' '}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formWeight">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            placeholder="Enter Weight"
            required
            name="weight"
            value={newForm.weight}
            onChange={handleOnChange}
            type="text"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Weight{' '}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formStory">
          <Form.Label>Story behind Artifact</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            required
            name="story"
            value={newForm.story}
            onChange={handleOnChange}
            type="textarea"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Story{' '}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formSignificance">
          <Form.Label>Cultural Significance</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            required
            name="significance"
            value={newForm.significance}
            onChange={handleOnChange}
            type="textarea"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Significance{' '}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formAvailability">
          <Form.Label>Availability</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter Availability"
            required
            name="availability"
            value={newForm.availability}
            onChange={handleOnChange}
            type="textarea"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Availability{' '}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Date Created</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={newForm.date}
            onChange={handleOnChange}
            max={formDate}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please Enter valid Date{' '}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>{' '}
        <Button as="input" type="reset" value="Cancel" />
      </Form>
    </div>
  )
}

export default NFTForm