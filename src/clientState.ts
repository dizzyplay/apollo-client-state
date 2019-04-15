import { Resolvers } from "./types/resolvers";
import gql from "graphql-tag";
import { GET_NOTES } from "./queries";
import { fragment } from "./fragments";

export const defaults = {
  notes: [
    {
      __typename: "Note",
      id: 1,
      title: "fucn",
      content: "testsets"
    }
  ]
};
export const typeDefs = [
  `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query{
    notes:[Note]!
    note(id:Int!):Note
  }
  type Mutation{
    createNote(title:String!, content:String!):Note
    editNote(id:Int!, title:String!, content:String!):Note
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

      const note = cache.readFragment({ fragment, id });
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
      return newNote;
    },
    editNote: (_, { id, title, content }, { cache }) => {
      const noteId = cache.config.dataIdFromObject({ __typename: "Note", id });
      const note = cache.readFragment({ fragment, id: noteId });
      const { notes } = cache.readQuery({ query: GET_NOTES });
      const temp = notes.filter((note: any) => note.id !== id);
      note.title = title;
      note.content = content;
      console.log(note);
      console.log(notes);
      console.log(temp);
      const ttt = temp.push(note);
      cache.writeData({ data: { notes: ttt } });
      return note;
    }
  }
};
