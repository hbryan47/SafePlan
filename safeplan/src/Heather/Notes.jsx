// import React, { useState } from "react";

// const Notes = () => {
// 	const [notes, setNotes] = useState([]);

// 	const addNote = () => {
// 		// Logic to add a new note
// 		const newNote = {
// 			id: Date.now(),
// 			text: "",
// 		};
// 		setNotes([...notes, newNote]);
// 	};

// 	const updateNote = (id, text) => {
// 		// Logic to update a note based on its ID
// 		const updatedNotes = notes.map((note) =>
// 			note.id === id ? { ...note, text } : note
// 		);
// 		setNotes(updatedNotes);
// 	};

// 	const deleteNote = (id) => {
// 		// Logic to delete a note based on its ID
// 		const updatedNotes = notes.filter((note) => note.id !== id);
// 		setNotes(updatedNotes);
// 	};

// 	return (
// 		<div>
// 			<h2>My Notes</h2>
// 			<button onClick={addNote}>Add Note</button>
// 			{notes.map((note) => (
// 				<div key={note.id}>
// 					<input
// 						type="text"
// 						value={note.text}
// 						onChange={(e) => updateNote(note.id, e.target.value)}
// 					/>
// 					<button onClick={() => deleteNote(note.id)}>Delete</button>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default Notes;
