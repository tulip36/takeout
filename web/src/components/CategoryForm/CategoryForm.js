import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const CategoryForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.category?.id)
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
          name="CategoryId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category id
        </Label>
        <NumberField
          name="CategoryId"
          defaultValue={props.category?.CategoryId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="CategoryId" className="rw-field-error" />

        <Label
          name="Nmae"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nmae
        </Label>
        <TextField
          name="Nmae"
          defaultValue={props.category?.Nmae}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="Nmae" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CategoryForm
