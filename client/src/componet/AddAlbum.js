import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  getBandsQuery,
  addAlbumsMutation,
  getAlumsQuery,
} from "../queries/queries.js";

class AddAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          genre: "",
          bandId: "",
        };
      }

      displayBands() {
        var data = this.props.getBandsQuery;
        if (data.loading) {
          return <option disabled>Loading bands</option>;
        } else {
          return data.bands.map((band) => {
            return (
              <option key={band.id} value={band.id}>
                {band.name}
              </option>
            );
          });
        }
      }
}

