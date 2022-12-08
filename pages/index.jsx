import { useEffect } from "react";
import { Layout } from "../components/layout";
import Todos from "../components/Todos";
import Notes from "../components/Notes";
import { setNotesData } from "../store/notesSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = window.electronAPI.getFiles();
    data
      .then((res) => {
        dispatch(setNotesData(res));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <Notes />
      <Todos />
    </Layout>
  );
}
