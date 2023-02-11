import React, {Component} from 'react';
import NotesForm from './components/NotesForm/NotesForm';
import NotesList from './components/NotesList/NotesList';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    notes: localStorage.getItem("notes_list") ? JSON.parse(localStorage.getItem("notes_list")) : [],
    currentNote: "" 
  }

  // handleChange Function
  handleChange = (e) => {
    this.setState ({
      currentNote: e.target.value
    });
  }

  // addNote Function
  addNote = (e) => {
    e.preventDefault();
    if(e.target.note.value == "") {
      document.getElementById("alert").style.display = "block";
      setTimeout(() => {
        document.getElementById("alert").style.display = "none";        
      }, 2000);
    } else {
      let currentNote = this.state.currentNote;
      let notes = this.state.notes;
      notes.push({"note": currentNote});
      this.setState({
        notes,
        currentNote: ''
      });
      localStorage.setItem("notes_list", JSON.stringify(this.state.notes));
    }
  }

  // deleteNote Function
  deleteNote = (index) => {
    let notes = this.state.notes;
    notes.splice(index, 1);
    this.setState({notes});
    localStorage.setItem("notes_list", JSON.stringify(this.state.notes));
  } 

  // editNote Function
  editNote = (index, value) => {
    let {notes} = this.state;
    let note = notes[index];
    note['note'] = value;
    this.setState({notes});
    localStorage.setItem("notes_list", JSON.stringify(this.state.notes));     
  }

  render() {
    let NotesItems;
    if(localStorage.getItem("notes_list") && JSON.parse(localStorage.getItem("notes_list")).length > 0) {
      NotesItems = JSON.parse(localStorage.getItem("notes_list")).map((note, index) => {
        return (
          <NotesList note={note} key={index} index={index} deleteNote={this.deleteNote} editNote={this.editNote}/>
        )
      }); 
    } else {
      NotesItems = <p className="empty" style={{fontWeight: "bold", color: "#444", background: "#fff", borderRadius: "15px", display: "inline-block", padding: "10px"}}>There are No Notes to Show</p>;
    }
    return (
      <div className="App" style={{textAlign: 'center', margin: '50px auto', height: "100%"}}>
        <h1 style={{color: "#fff", marginBottom: "55px"}}>MY Notebook</h1>
        <NotesForm handleChange={this.handleChange} addNote={this.addNote} currentNote={this.state.currentNote}/>
        <p id="alert" style={{display: 'none', color: "red", fontWeight: "bold"}}>Please Add a Note!</p>
        <ul style={{listStyle: 'none', width: "80%", margin: "auto"}}>{NotesItems}</ul>
        <Footer />
      </div>
    );
  }
}

export default App;