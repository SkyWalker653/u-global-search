import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { Modal, ModalBody } from 'reactstrap'
import { GlobalHotKeys } from 'react-hotkeys'
import 'bootstrap/dist/css/bootstrap.min.css'

const keyMap = { SHOW_GLOBAL_SEARCH_MODAL: 'shift+?' }

export default class GlobalSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this)
  }

  static propTypes = {
    searchOptions: PropTypes.array,
    onGlobarSearchInput: PropTypes.any,
    isLoading: PropTypes.bool
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    const { searchOptions, onGlobarSearchInput, isLoading } = this.props

    const globalSearchModalHandler = () => {
      this.setState({
        modal: true
      })
      setTimeout(() => this._typeahead.getInstance().focus(), 200)
    }

    const globalSearchHandler = {
      SHOW_GLOBAL_SEARCH_MODAL: globalSearchModalHandler
    }

    return (
      <div className='globalSearchWrapper'>
        <GlobalHotKeys keyMap={keyMap} handlers={globalSearchHandler} global />
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
        >
          <ModalBody style={{ padding: 0 }}>
            <AsyncTypeahead
              autoFocus={true}
              // eslint-disable-next-line no-return-assign
              ref={(ref) => this._typeahead = ref}
              id='globalSearch'
              labelKey='name'
              bsSize='large'
              options={searchOptions}
              placeholder='Type to search page...'
              // isLoading={isLoading}
              isLoading={true}
              minLength={3}
              delay={300}
              onSearch={onGlobarSearchInput}
              // onInputChange={onGlobarSearchInput}
              onChange={(selected) => { window.location.href = selected[0]['moduleUrl'] }}
              renderMenuItemChildren={(option) => (
                <span>
                  <i className={option.icon} /> {option.name}
                </span>
              )}
            />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
