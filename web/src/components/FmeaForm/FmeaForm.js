import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const FmeaForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.fmea?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="Owner"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Owner
        </Label>
        <TextField
          name="Owner"
          defaultValue={props.fmea?.Owner}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="Owner" className="rw-field-error" />

        <Label
          name="vesselname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vesselname
        </Label>
        <TextField
          name="vesselname"
          defaultValue={props.fmea?.vesselname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="vesselname" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.fmea?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>
        <TextField
          name="date"
          defaultValue={props.fmea?.date}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="date" className="rw-field-error" />

        <Label
          name="author"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author
        </Label>
        <TextField
          name="author"
          defaultValue={props.fmea?.author}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="author" className="rw-field-error" />

        <Label
          name="classed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Classed
        </Label>
        <CheckboxField
          name="classed"
          defaultChecked={props.fmea?.classed}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="classed" className="rw-field-error" />

        <Label
          name="classsociety"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Classsociety
        </Label>
        <TextField
          name="classsociety"
          defaultValue={props.fmea?.classsociety}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="classsociety" className="rw-field-error" />

        <Label
          name="reviewed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reviewed
        </Label>
        <CheckboxField
          name="reviewed"
          defaultChecked={props.fmea?.reviewed}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="reviewed" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FmeaForm
