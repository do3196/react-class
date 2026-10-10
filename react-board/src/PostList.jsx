// 게시글 한 개를 보여주는 PostItem 컴포넌트 가져오기
import PostItem from './PostItem.jsx'
// 게시글 전체 목록을 보여주는 컴포넌트
function PostList({ posts }) {
  // 부모 App.jsx에서 전달받은 posts 배열을 사용
  return (
    <div>
      {/* posts 배열의 게시글을 하나씩 반복 */}
      {posts.map((post) => (
        // 게시글 하나를 PostItem으로 전달
        <PostItem key={post.id} post={post}/>
          // 반복되는 게시글을 구분하기 위한 값
           // 현재 게시글 하나를 전달
      ))}
    </div>
  )
}

// 다른 파일에서 PostList를 사용할 수 있도록 설정
export default PostList