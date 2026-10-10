// 게시글 한 개를 보여주는 컴포넌트
function PostItem({ post }) {
  // 부모 컴포넌트에서 전달받은 post를 사용
  // post 안에는 id, title, body 값이 들어있음
  return (
    // 게시글 한 개를 article 태그로 표시
    <article className="post-card">
      {/* 게시글 제목 출력 */}
      <h2>{post.title}</h2>
      {/* 게시글 내용 출력 */}
      <p>{post.body}</p>
    </article>
  )
}
// 다른 파일에서 PostItem을 사용할 수 있도록 설정
export default PostItem