import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MenuForm from 'src/components/MenuForm'

import { QUERY } from 'src/components/MenusCell'

const CREATE_MENU_MUTATION = gql`
  mutation CreateMenuMutation($input: CreateMenuInput!) {
    createMenu(input: $input) {
      id
    }
  }
`

const NewMenu = () => {
  const { addMessage } = useFlash()
  const [createMenu, { loading, error }] = useMutation(CREATE_MENU_MUTATION, {
    onCompleted: () => {
      navigate(routes.menus())
      addMessage('Menu created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      MenuId: parseInt(input.MenuId),
      FoodId: parseInt(input.FoodId),
    })
    createMenu({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Menu</h2>
      </header>
      <div className="rw-segment-main">
        <MenuForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMenu
