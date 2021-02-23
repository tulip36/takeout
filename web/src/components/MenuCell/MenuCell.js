import Menu from 'src/components/Menu'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Menu not found</div>

export const Success = ({ menu }) => {
  return <Menu menu={menu} />
}
