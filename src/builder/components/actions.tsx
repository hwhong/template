import React from "react";
import { setNameValue, setGreetingsMessage } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

interface DispatchProps {
  setNameValue: typeof setNameValue;
  setGreetingsMessage: typeof setGreetingsMessage;
}

type Props = DispatchProps;

const Actions = (props: Props) => {
  return (
    <div>
      <button onClick={() => props.setNameValue("New York")}>Set Name</button>
      <button onClick={() => props.setGreetingsMessage("Howdy")}>
        Set Greetings Message
      </button>
    </div>
  );
};

export default connect(null, (dispatch) =>
  bindActionCreators({ setNameValue, setGreetingsMessage }, dispatch)
)(Actions);
