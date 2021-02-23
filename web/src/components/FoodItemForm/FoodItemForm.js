import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const FoodItemForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.foodItem?.id)
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
          name="FoodId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Food id
        </Label>
        <NumberField
          name="FoodId"
          defaultValue={props.foodItem?.FoodId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="FoodId" className="rw-field-error" />

        <Label
          name="Name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="Name"
          defaultValue={props.foodItem?.Name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="Name" className="rw-field-error" />

        <Label
          name="Quantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity
        </Label>
        <TextField
          name="Quantity"
          defaultValue={props.foodItem?.Quantity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          dataType="Float"
        />
        <FieldError name="Quantity" className="rw-field-error" />

        <Label
          name="UnitPrice"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Unit price
        </Label>
        <TextField
          name="UnitPrice"
          defaultValue={props.foodItem?.UnitPrice}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          dataType="Float"
        />
        <FieldError name="UnitPrice" className="rw-field-error" />

        <Label
          name="CategoryId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category id
        </Label>
        <NumberField
          name="CategoryId"
          defaultValue={props.foodItem?.CategoryId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="CategoryId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FoodItemForm
