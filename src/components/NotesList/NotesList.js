import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './NotesList.css';

class NotesList extends Component {
    state = {
        isEdit: false
    }

    // toggleEdit Function
    toggleEdit = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        });
    }

    // noteItem Function
    noteItem = () => {
        return (
            <React.Fragment>
                <li className="note"><span className="note_name">{this.props.note.note}</span><span className="delete" onClick={() => {this.props.deleteNote(this.props.index)}}><FontAwesomeIcon icon={faTrashAlt}/></span><span className="edit" onClick={this.toggleEdit}><FontAwesomeIcon icon={faEdit}/></span></li>      
            </React.Fragment>
        )
    }

    // updateNoteForm Funtion 
    updateNoteForm = () => {
        return (
            <div>
                <form onSubmit={this.handleSubmitUpdateNoteForm} id="update_form">
                    <div className="form_inputes">
                        <input type="text" defaultValue={this.props.note.note} id="update" ref={(value) => this.input = value} placeholder="Update your Note.."/>
                        <input type="submit" value="Update"/>
                    </div>
                    <p id="alert_update" style={{display: "none", color: "red", fontWeight: "bold"}}>Please Update with a Valid Value!</p>
                </form>
            </div>
        )
    }

    // handleSubmitUpdateNoteForm Function
    handleSubmitUpdateNoteForm = (e) => {
        e.preventDefault();
        let updateForm = e.target;
        if(this.input.value != "" /* or you can use this >> e.target.update.value*/) {
            this.props.editNote(this.props.index, this.input.value /* or you can use this >> e.target.update.value*/);
            this.toggleEdit();
        } else {
            updateForm.querySelector("#alert_update").style.display = "block";
            setTimeout(() => {
                updateForm.querySelector("#alert_update").style.display = "none";                
            }, 2000);
        }
    }

    render() {
        let {isEdit} = this.state;
        return (
            (isEdit ? this.updateNoteForm() : this.noteItem())
        )
    }
}

export default NotesList;