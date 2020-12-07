import { notSure, deleted } from "../../../jsModules/displayFunctions/mainMenuNavigation";

export default function DeleteModal(props) {
  console.log("administration/DeleteModal.js || DeleteModal()");
  return (
    <div className="modal-wrapper hide">
      <div className="areYouSure">
        <div className="modal">
          <div className="modal-text">
            <h1>You are about to delete a {props.systemPart === "planner" ? "task" : "profile"}!</h1>
            <p>
              {props.systemPart === "planner"
                ? "This will remove the task permanently, and it will not be recovereable."
                : "If you do this, the user will no longer be able to log in to the system."}{" "}
            </p>
            <h3> Are you sure you want to delete this {props.systemPart === "planner" ? "task" : "profile"}?</h3>
          </div>
          <button
            className="delete text-btn"
            onClick={() => {
              props.systemPart === "planner" ? props.deleteCard(props.id) : props.deleteProfile(props.id);
              deleted();
              props.setViewingProfile ? props.setViewingProfile(false) : console.log("planner");
            }}>
            Yes, delete it
          </button>
          <button className="cancel text-btn" onClick={notSure}>
            No, go back
          </button>
        </div>
      </div>
    </div>
  );
}
