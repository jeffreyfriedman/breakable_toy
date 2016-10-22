import React from 'react';
import RelatedBooks from './RelatedBooks'
import NewDestinationNote from './NewDestinationNote'
import EditDestinationNote from './EditDestinationNote'

const DestinationDetails = props => {

  let destinationNote = props.userDestinationNotes.filter(note => {
    return note.id === props.selectedDestination.id;
  });

  let conditionalNoteControl;
  // if valid text in note, show edit controls, otherwise show new note controls
  if (destinationNote[0].note !== null) {
    conditionalNoteControl =
      <EditDestinationNote
        destinationNote={destinationNote[0]}
        newDestinationNoteBody={props.destinationNoteBody}
        destination={props.selectedDestination}
        handleDestinationNoteChange={props.handleDestinationNoteChange}
        handleDestinationNoteSubmit={props.handleDestinationNoteSubmit}
        handleDestinationNoteDeleteClick={props.handleDestinationNoteDeleteClick}
      />
  } else {
    conditionalNoteControl =
      <NewDestinationNote
        newDestinationNoteBody={props.destinationNoteBody}
        destination={props.selectedDestination}
        handleDestinationNoteChange={props.handleDestinationNoteChange}
        handleDestinationNoteSubmit={props.handleDestinationNoteSubmit}
      />
  }
  return(
    <div>
      <div className="destinationDetails">
        {props.selectedDestination.city}
        {props.selectedDestination.country}
        <p>{props.selectedDestination.short_description}</p>
        <img className="img-responsive" src={props.selectedDestination.image}/>
      </div>
      <div>
        {conditionalNoteControl}
      </div>
      <div className="relatedBooks">
        <RelatedBooks
          myBooks={props.myBooks}
          selectedDestinationBooks={props.selectedDestinationBooks}
          handleBookAddClick={props.handleBookAddClick}
          handleBookDeleteClick={props.handleBookDeleteClick}
        />
      </div>
    </div>
  )
}

export default DestinationDetails;
