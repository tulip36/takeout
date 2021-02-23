import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MenuForm from 'src/components/MenuForm'

export const QUERY = gql`
  query FIND_MENU_BY_ID($id: Int!) {
    menu: menu(id: $id) {
      MenuId
      Prince
      StartDate
      EndDate
      FoodId
    }
  }
`
const UPDATE_MENU_MUTATION = gql`
  mutation UpdateMenuMutation($id: Int!, $input: UpdateMenuInput!) {
    updateMenu(id: $id, input: $input) {
      MenuId
      Prince
      StartDate
      EndDate
      FoodId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ menu }) => {
  const { addMessage } = useFlash()
  const [updateMenu, { loading, error }] = useMutation(UPDATE_MENU_MUTATION, {
    onCompleted: () => {
      navigate(routes.menus())
      addMessage('Menu updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      MenuId: parseInt(input.MenuId),
      FoodId: parseInt(input.FoodId),
    })
    updateMenu({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Menu {menu.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MenuForm menu={menu} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
