import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="PostList1" body="desc" />
      <Post author="PostList2" body="desc" />
    </ul>
  );
}
