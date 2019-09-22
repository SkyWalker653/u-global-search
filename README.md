# u-global-search

> KPININJA global search plugin to search modules.

[![NPM](https://img.shields.io/npm/v/u-global-search.svg)](https://www.npmjs.com/package/u-global-search) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save u-global-search
```

## Usage

```jsx
import React, { Component } from 'react'

import GlobalSearch from 'u-global-search'

class Example extends Component {
  constructor(props) {
    super(props)
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
    // Fetch query data from server and append it to exisiting state.
    this.setState(prevState => ({
      searchData: [...prevState.searchData, {
        name: 'foo',
        icon: "pe pe-7s-users",
        moduleUrl: "https://foo.testing.kpininja.com"
      }]
    }))
  }

  render () {
    return (
      <GlobalSearch
          onGlobarSearchInput={this.handleGlobalSearcgInputChange}
          searchOptions={this.state.searchData}
          isLoading={this.state.isGlobalSearchLoading} />
    )
  }
}
```

| Prop                            | Type                      | Description                                               |
| ------------------------------- | ------------------------- | --------------------------------------------------------- |
| onGlobarSearchInput `required`  | function                  | Callback to perform when the search is executed.          |
| searchOptions `required`        | array or Array of objects | Full set of options, including any pre-selected options.  |
| isLoading                       | boolean                   | Indicate whether an asynchronous data fetch is happening. |

## License

MIT © [Priya Ranjan](https://github.com/SkyWalker653/u-global-search)
