import { Resolvers } from "./types/resolvers";
import gql from "graphql-tag";
import { GET_NOTES } from "./queries";
import { NOTE_FRAGMENT } from "./fragments";
import offlineSave from "./offline";

const notes: any = localStorage.getItem("notes");
export const defaults = {
  notes: JSON.parse(notes)
};
export const typeDefs = [
  `
  schema{
    query: Query
    mutation: Mutation
  }
  type Query{
    notes:[Note]!
    note(id:Int!):Note!
  }
  type Mutation{
    createNote(title:String!, content:String!):Note
    editNote(id:Int!, title:String, content:String):Note
  }
  type Note{
    id:Int!
    title:String!
    content:String!
   }
`
];
export const resolvers: Resolvers = {
  Query: {
    note: (_, variables, { cache, getCacheKey }) => {
      const id = cache.config.dataIdFromObject({
        __typename: "Note",
        id: variables.id
      });

      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id });
      return note;
    }
  },
  Mutation: {
    createNote: (_, variables, { cache }) => {
      const { notes } = cache.readQuery({ query: GET_NOTES });
      const { title, content } = variables;
      const newNote = {
        __typename: "Note",
        title,
        content,
        id: notes.length + 1
      };
      const new_note_list = notes.concat(newNote);
      cache.writeData({ data: { notes: [newNote, ...notes] } });
      offlineSave({ cache });
      return newNote;
    },
    editNote: (_, { id, title, content }, { cache }) => {
      const noteId = cache.config.dataIdFromObject({ __typename: "Note", id });
      const note = cache.readFragment({ id: noteId, fragment: NOTE_FRAGMENT });
      const updatedNote = { ...note, title, content };
      cache.writeFragment({
        id: noteId,
        fragment: NOTE_FRAGMENT,
        data: updatedNote
      });
      offlineSave({ cache });
      return updatedNote;
    }
  }
};
