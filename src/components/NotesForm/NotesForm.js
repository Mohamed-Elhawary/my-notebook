import React from 'react';
import './NotesForm.css';

const NotesForm = (props) => {
    return(
        <form onSubmit={props.addNote}>
            <div className="form_inputs">
                <input type="text" id="note" onChange={props.handleChange} value={props.currentNote} placeholder="Add Note.."/>
                <input type="submit" value="Add"/>
            </div>
        </form>
    )
}

export default NotesForm;