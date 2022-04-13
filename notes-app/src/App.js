import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
     {
       id: nanoid(),
       text: "this is note number one",
       date: "13/04/2022",
     },
     {
      id: nanoid(),
      text: "this is note number two",
      date: "15/04/2022",
    },
    {
     id: nanoid(),
     text: "this is note number three",
     date: "17/04/2022",
    },
    {
      id: nanoid(),
      text: "this is note number four",
      date: "19/04/2022",
     },
]);
  return (
    <div className="container">
         <NotesList notes={notes}/>  
    </div>
  );
};

export default App;
