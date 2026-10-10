// useState : 화면에서 사용하는 값을 저장, 그 값을 변경할 수 있게 해주는 함수
// useEffect : React 화면이 실행된 후 특정 작업을 자동으로 실행할 때 사용하는 함수
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // 1. 게시글 데이터를 저장하는 상태값
  // posts : 게시글 목록을 저장하는 변수
  // setPosts : posts 값을 변경할 때 사용하는 함수
  // 처음에는 게시글이 없기 때문에 빈 배열 [] 사용
  const [posts, setPosts] = useState([])
  // 2. 데이터 로딩 여부를 저장하는 상태값
  // loading : 데이터를 불러오는 중인지 확인하는 값
  // true  → 데이터를 불러오는 중
  // false → 데이터 불러오기 완료
  const [loading, setLoading] = useState(true)
  // (추가)검색어 저장
  const [search, setSearch] = useState('')
  // 3. 화면이 처음 실행될 때 게시글 데이터 요청
  // useEffect()
  // React 컴포넌트가 화면에 나타난 후 특정 작업을 실행할 때 사용하는 기능
  useEffect(() => {
    // fetch() → 외부 서버에 데이터를 요청하는 함수
    fetch('https://jsonplaceholder.typicode.com/posts')
      // 서버에서 응답(response)을 받은 다음 실행
      .then((response) => response.json())
        // response.json() → 서버에서 받은 JSON 데이터를
        // JavaScript에서 사용할 수 있는 데이터로 변환
      // 변환된 데이터가 준비되면 실행
      .then((data) => {
        setPosts(data)
        setLoading(false)})
        // 서버에서 받은 게시글 데이터를
        // posts 상태값에 저장
        // 게시글 데이터를 모두 받았으므로
        // loading 값을 false로 변경
  // [] 빈 배열 → App 컴포넌트가 처음 실행될 때
  //   useEffect를 한 번만 실행
  }, [])
  // 4. 데이터를 불러오는 동안 보여줄 화면
  // loading이 true이면
  // 아래 화면만 먼저 보여줌
  if (loading) {
    return (
      <main className="page">
        <p>불러오는 중...</p>
      </main>
    )
  }
  // 게시글 제목에 검색어가 포함된 게시글만 찾기
  const filteredPosts = posts.filter((post) =>
    post.title
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  // 5. 데이터 로딩이 끝난 후 보여줄 화면
  return (
     <main className="page">
      <h1>React 게시판</h1>
      {/* 게시글 검색 영역 */}
      <div className="search-area">
        <input type="text" placeholder="게시글 제목 검색" value={search}
          // 입력할 때마다 search 값 변경
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* 검색된 게시글 개수 */}
      <p className="search-count">
        검색 결과 : {' '} {filteredPosts.length}개
      </p>

      {/* filteredPosts.map() 사용 */}
      {filteredPosts.map((post) => (
        <article
          // 검색어가 있으면 게시글을 크게 보여줌
          className={search !== ''
              ? 'post-card post-card-search'
              : 'post-card'
          }
          // 게시글을 구분하기 위한 값
          key={post.id}>
          {/* 게시글 번호 */}
          <span className="post-number">
            게시글 #{post.id}
          </span>
          {/* 게시글 제목 */}
          <h2>{post.title}</h2>
          {/* 게시글 내용 */}
          <p>{post.body}</p>
        </article>
      ))}
      {/* 검색 결과가 없을 경우 */}
      {filteredPosts.length === 0 && (
        <p className="no-result">
          검색 결과가 없습니다.
        </p>
      )}
    </main>
  )
}
// 다른 파일에서 App 컴포넌트를 사용할 수 있도록 설정
export default App