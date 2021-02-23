import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const MenuForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.menu?.id)
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
          name="MenuId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Menu id
        </Label>
        <NumberField
          name="MenuId"
          defaultValue={props.menu?.MenuId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="MenuId" className="rw-field-error" />

        <Label
          name="Prince"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prince
        </Label>
        <TextField
          name="Prince"
          defaultValue={props.menu?.Prince}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          dataType="Float"
        />
        <FieldError name="Prince" className="rw-field-error" />

        <Label
          name="StartDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start date
        </Label>
        <TextField
          name="StartDate"
          defaultValue={props.menu?.StartDate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="StartDate" className="rw-field-error" />

        <Label
          name="EndDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End date
        </Label>
        <TextField
          name="EndDate"
          defaultValue={props.menu?.EndDate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="EndDate" className="rw-field-error" />

        <Label
          name="FoodId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Food id
        </Label>
        <NumberField
          name="FoodId"
          defaultValue={props.menu?.FoodId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="FoodId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MenuForm
