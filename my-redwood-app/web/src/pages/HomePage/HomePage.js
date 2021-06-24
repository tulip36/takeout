import BlogLayout from 'src/layouts/BlogLayout'
import PostsCell from 'src/components/Post/PostsCell'

// const Posts = () => {
//   return <PostsCell />
// }

const HomePage = () => {
  return (
    <>
      <BlogLayout className="p-5">
        <PostsCell className="p-5" />
      </BlogLayout>
    </>
  )
}

export default HomePage
