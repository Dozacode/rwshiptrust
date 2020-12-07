import { Link, routes } from '@redwoodjs/router'
import LandingLayout from 'src/layouts/LandingLayout'
import 'src/index.css'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div><LandingLayout/>

    <Form onSubmit={onSubmit}>
      <Label name="name" className="text-red" errorClassName="label error" />
      <TextField
        name="name"
        className="input"
        errorClassName="input error"
        validation={{ required: true }}
      />
      <FieldError name="name" className="error-message" />

      <Label name="email" className="label" errorClassName="label error" />
      <TextField
        name="email"
        className="input"
        errorClassName="input error"
        validation={{
          required: true,
          pattern: {
            value: /[^@]+@[^\.]+\..+/,
          },
        }}
      />
      <FieldError name="email" className="error-message" />

      <Label name="message" className="label" errorClassName="label error" />
      <TextAreaField
        name="message"
        className="input"
        errorClassName="input error"
        validation={{ required: true }}
      />
      <FieldError name="message" className="error-message" />

      <Submit className="button">Save</Submit>
    </Form>
    </div>
  )
}

export default ContactPage
