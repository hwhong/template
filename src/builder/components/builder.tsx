import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StateType } from "../../store";

interface ReduxProps {
  name: string;
  message: string;
}

type Props = ReduxProps;

const Builder = (props: Props) => {
  return <div>{`${props.message} ${props.name}`}</div>;
};

export default connect(
  (state: StateType) => ({
    name: state.builder.name,
    message: state.builder.message,
  }),
  (dispatch) => bindActionCreators({}, dispatch)
)(Builder);
