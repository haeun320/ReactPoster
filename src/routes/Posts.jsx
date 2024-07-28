import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

export default function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}
