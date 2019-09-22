import React, { Component } from 'react'

import GlobalSearch from 'u-global-search'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.GlobalSearch = React.createRef()
    this.state = {
      isGlobalSearchLoading: true,
      searchData: [
        {
          name: "Manage Users",
          icon: "fal fa-users",
          moduleUrl: "https://user.testing.kpininja.com"
        },
        {
          name: "Users",
          icon: "pe pe-7s-users",
          moduleUrl: "https://user.testing.kpininja.com"
        }
      ]
    }
  }

  handleGlobalSearcgInputChange = (searchQuery) => {
    console.log('Search query tiggered: ' + searchQuery)

    this.setState(prevState => ({
      searchData: [...prevState.searchData, {
        name: searchQuery + ' - ' + Math.random().toString(36).slice(-5),
        icon: "pe pe-7s-users",
        moduleUrl: "https://user.testing.kpininja.com"
      }]
    }))
  }

  handleGlobalSearchOnClick = () => {
    this.GlobalSearch.current.toggle()
  }

  render () {
    return (
      <div style={{ textAlign: "center", marginTop: 160 }}>
        <h4>Press SHIFT + ? key to open search panel</h4>
        <GlobalSearch
          ref={this.GlobalSearch}
          onGlobarSearchInput={this.handleGlobalSearcgInputChange}
          searchOptions={this.state.searchData}
          isLoading={this.state.isGlobalSearchLoading} />
          
          <button className="btn btn-primary" onClick={this.handleGlobalSearchOnClick}>Search</button>
      </div>
    )
  }
}
