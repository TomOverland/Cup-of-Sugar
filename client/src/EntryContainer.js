import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Entry from "./Entry";


class EntryContainer extends Component {
  state = {
    currentPage: "Entry"
  };


handlePageChange = page => {
    this.setState({ currentPage: page });
  };

renderPages() {
  if (this.state.currentPage === "Entry") {
    return <Entry />;
  } else if (this.state.currentPage === "Sign Up") {
    return <SignUp />;
  };

}

render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPages()}
      </div>
    );
  }
}

export default EntryContainer;
