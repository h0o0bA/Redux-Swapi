import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { fetching } from "../actions";

class CharacterListView extends React.Component {
  // call our action
  componentDidMount() {
    this.props.fetching();
    console.log(this.props.fetching);
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      console.log("fetching data");
      console.log(this.props);
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isloading: state.charsReducer.isloading,
    success: state.charsReducer.success
  };
};

export default connect(
  /* mapStateToProps replaces null here */
  mapStateToProps,
  {
    fetching /* action creators go here */
  }
)(CharacterListView);
