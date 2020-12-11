import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const DpatForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.dpat?.id)
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
          defaultValue={props.dpat?.Owner}
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
          defaultValue={props.dpat?.vesselname}
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
          defaultValue={props.dpat?.title}
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
          defaultValue={props.dpat?.date}
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
          defaultValue={props.dpat?.author}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="author" className="rw-field-error" />

        <Label
          name="findings"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Findings
        </Label>
        <CheckboxField
          name="findings"
          defaultChecked={props.dpat?.findings}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="findings" className="rw-field-error" />

        <Label
          name="anyAFindings"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Any a findings
        </Label>
        <CheckboxField
          name="anyAFindings"
          defaultChecked={props.dpat?.anyAFindings}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="anyAFindings" className="rw-field-error" />

        <Label
          name="aFindings"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          A findings
        </Label>
        <TextField
          name="aFindings"
          defaultValue={props.dpat?.aFindings}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="aFindings" className="rw-field-error" />

        <Label
          name="anyBFindings"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Any b findings
        </Label>
        <CheckboxField
          name="anyBFindings"
          defaultChecked={props.dpat?.anyBFindings}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="anyBFindings" className="rw-field-error" />

        <Label
          name="bFindings"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          B findings
        </Label>
        <TextField
          name="bFindings"
          defaultValue={props.dpat?.bFindings}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="bFindings" className="rw-field-error" />

        <Label
          name="anyCFindings"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Any c findings
        </Label>
        <CheckboxField
          name="anyCFindings"
          defaultChecked={props.dpat?.anyCFindings}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="anyCFindings" className="rw-field-error" />

        <Label
          name="cFindings"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          C findings
        </Label>
        <TextField
          name="cFindings"
          defaultValue={props.dpat?.cFindings}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="cFindings" className="rw-field-error" />

        <Label
          name="classed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Classed
        </Label>
        <CheckboxField
          name="classed"
          defaultChecked={props.dpat?.classed}
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
          defaultValue={props.dpat?.classsociety}
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
          defaultChecked={props.dpat?.reviewed}
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

export default DpatForm
