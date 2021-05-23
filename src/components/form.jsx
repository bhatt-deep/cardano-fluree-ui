import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Col, Image } from 'react-bootstrap'
import Axios from 'axios'
import {Redirect, useHistory} from 'react-router-dom'
import FullPageLoader from './fullPageLoader'

export default function NFTForm() {

  const history = useHistory() 
  const url = 'http://localhost:3001/'
  const dataUrl = 'http://localhost:3001/data'
  var formDate = new Date().toISOString().split('T')[0]

  const [validated, setValidated] = useState(false)
  const [newForm, setForm] = useState({
    category      : 'Art',
    name          : '',
    artist        : '',
    weight        : '',
    story         : '',
    date          : '',
    imageUrl      : '',
    materials     : '',
    dimensions    : '',
    significance  : '',
    availability  : ''
  })
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const [imageBuffer, setBuffer] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    console.log('objectUrl', objectUrl)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = async (e) => {
    handleOnChange(e)
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])

    let file = e.target.files[0]
    setBuffer(file) 
  }

  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault()
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)

    const formData = new FormData();
    formData.append('category', newForm.category)
    formData.append('name', newForm.name)
    formData.append('artist', newForm.artist)
    formData.append('image', imageBuffer)
    formData.append('materials', newForm.materials)
    formData.append('dimensions', newForm.dimensions)
    formData.append('weight', newForm.weight)
    formData.append('story', newForm.story)
    formData.append('significance', newForm.significance)

    formData.append('availability', newForm.availability)
    formData.append('date', newForm.date)

    console.log(`Passing request to : ${url}`)

    let result = {
      hash : '1qpuu9s2chx73ccyjfstd8y6lt57ws4hxjjmu6y9kuazdmef0xxsul3whnjle2wxr76vptwgxahnkl7ncddxx6fyqc8rstxk0hh'
    }


    await Axios.post(url, formData, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then((res) => {
      console.log(res)
      alert(`Data has been successfully stored.`)
      setLoading(false)
      history.push('./certificate', result.hash)
    })

    
    //history.push('./certificate', result.hash)


  }

  useEffect(() => {}, [newForm])

  const handleOnChange = async (e) => {
    e.preventDefault()
    console.log(e)
    //console.log(imageBuffer)
      let { name, value } = e.target
      await setForm({ ...newForm, [name]: value })
  }

  return (
    <div>
      <Form
        validated={validated}
        onSubmit={handleSubmit}
        style={{ width: '70%', marginLeft: '15%', marginTop: '2%' }}
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
            <option disabled>Music</option>
            <option disabled>Identity</option>
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
            onChange={onSelectFile}
          />
          {selectedFile && (
            <Image
              src={preview}
              alt="uploaded img"
              thumbnail
              xs={6}
              md={4}
              style={{ border: 'none', maxWidth: '1000px', height: '300px' }}
            />
          )}
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="formArtworkName">
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

          <Form.Group as={Col} md="6" controlId="formArtistName">
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
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="formDimensions">
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

          <Form.Group as={Col} md="4" controlId="formWeight">
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

          <Form.Group as={Col} md="4" controlId="formDate">
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
        </Form.Row>
        <Form.Group controlId="formMaterials">
          <Form.Label>Materials</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
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
            rows={2}
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
        <Button variant="primary" type="submit">
          Submit
        </Button>{' '}
        <Button as="input" type="reset" value="Reset" />
      </Form>
      {loading ? <FullPageLoader/> : <Form/>}
    </div>
    
  )
}