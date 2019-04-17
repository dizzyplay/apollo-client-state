import { GET_NOTES } from "./queries";

export default ({ cache }: any) => {
  const { notes } = cache.readQuery({ query: GET_NOTES });
  const jsonNotes = JSON.stringify(notes);
  localStorage.setItem("notes", jsonNotes);
};
