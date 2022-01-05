import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "123",
      username: "rohan01.rv",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWScmlDa9Guyp65mDYgN5E7FMhXD2W2ThqA&usqp=CAU",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWScmlDa9Guyp65mDYgN5E7FMhXD2W2ThqA&usqp=CAU",
      caption: "this is good",
    },
    {
      id: "123",
      username: "rohan01.rv",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWScmlDa9Guyp65mDYgN5E7FMhXD2W2ThqA&usqp=CAU",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWScmlDa9Guyp65mDYgN5E7FMhXD2W2ThqA&usqp=CAU",
      caption: "this is good",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
