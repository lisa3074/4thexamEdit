import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { notSure } from "../../jsModules/displayFunctions/mainMenuNavigation";

export default function DeleteModal(props) {
  console.log(props);
  return (
    <div className="modal-wrapper hide">
      <div className="areYouSure">
        <ClickAwayListener onClickAway={notSure}>
          <div className="modal">
            <div className="modal-text">
              <h1>You are about to delete a profile!</h1>
              <p>If you do this, the user will no longer be able to log in to the system. </p>
              <h3> Are you sure you want to delete this profile?</h3>
            </div>
            <button
              className="delete text-btn"
              onClick={() => {
                props.deleteCard(props.id);
              }}>
              Yes, delete it
            </button>
            <button className="cancel text-btn" onClick={notSure}>
              No, go back
            </button>
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );
}
