import { useEffect } from "react";
import { Layout } from "../components/layout";
import Todos from "../components/Todos";
import Notes from "../components/Notes";
import { setNotesData, setTodosData } from "../store/notesSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const notes = window.electronAPI.getFiles();
    notes
      .then((res) => {
        dispatch(setNotesData(res));
      })
      .catch((err) => console.log(err));
    const todos = window.electronAPI.getTasks();
    todos
      .then((res) => {
        dispatch(setTodosData(res));
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
