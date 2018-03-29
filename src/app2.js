import React, { Component } from 'react';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "", // my query
      artist: null  // my response.
    }
  }

  search() {
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    var accessToken = 'BQCG3oBB2yAuh1-STMBtwpfZ1_bZJ_l6qiTGEId66D3WnRRvN53NdYU70ov7ZKqWOg0KMoIbk1n_uYaV5Ado-H890lnLAS3qlmnJ-HIyqmoBnsFu8tdiDeypVjMecw0ciHSF2XvYW17FA9LS9gOU8t5L7iOFiacUIQ&refresh_token=AQB_svNOAiYl6A9o1M13KjBU_zv-_wOJeZotWUy149q147zmxkmxHsWP12ST8RWFemAAux9ji15HsDM1zKXJaVw8DZMrT2gY7E-_4NDySahSguZe21NwdtlKQBOt56tu95g'

    var myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        this.setState({ artist });
      })

  }

  render() {

    let artist = {
      name: '',
      followers: {
        total: ''
      }
    };
    if (this.state.artist !== null) {
      artist = this.state.artist;
    }

    return (
      // return JSX
      <div className="container">
        <hr />
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text"
              onChange={event => { this.setState({ query: event.target.value }) }}
            className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button
              onClick={()=> this.search()}
               className="btn btn-default" type="button">Go!</button>
            </span>
          </div>
        </div>
        <hr />
        <div>
          <div> {artist.name}   </div>
          <div> {artist.followers.total} </div>
        </div>


        </div>
    )
  }
}
export default App;
