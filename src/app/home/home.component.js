// @flow
import React, {Component}                     from "react";
import Grid                                   from '../../shared/grid/grid.component';
import {HomeProps, HomeState, WorldsResponse} from "./home.types";
import * as API                               from './home.api';

class Home extends Component<HomeState, HomeProps> {
  componentDidMount() {
    API
      .getWorlds()
      .then(res => res.json())
      .then((worldsResponse: WorldsResponse) =>
        this.props.applyWorldList(worldsResponse.responseData));
  }

  render() {
    return (
      <section className={'home__section'}>
        <Grid
          list={this.props.worldList}
        />
      </section>
    );
  }
}

export default Home;
