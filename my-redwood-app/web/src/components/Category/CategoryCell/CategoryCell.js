import Category from 'src/components/Category/Category'

export const QUERY = gql`
  query FindCategoryById($id: Int!) {
    category: category(id: $id) {
      id
      name
      note
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Category not found</div>

export const Success = ({ category }) => {
  return <Category category={category} />
}
