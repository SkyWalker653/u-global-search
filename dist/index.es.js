import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Modal, ModalBody } from 'reactstrap';
import { GlobalHotKeys } from 'react-hotkeys';
import 'bootstrap/dist/css/bootstrap.min.css';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var keyMap = { SHOW_GLOBAL_SEARCH_MODAL: 'shift+?' };

var GlobalSearch = function (_Component) {
  inherits(GlobalSearch, _Component);

  function GlobalSearch(props) {
    classCallCheck(this, GlobalSearch);

    var _this = possibleConstructorReturn(this, (GlobalSearch.__proto__ || Object.getPrototypeOf(GlobalSearch)).call(this, props));

    _this.toggle = function () {
      _this.setState(function (prevState) {
        return {
          modal: !prevState.modal
        };
      });
    };

    _this.state = {
      modal: false
    };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  createClass(GlobalSearch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          searchOptions = _props.searchOptions,
          onGlobarSearchInput = _props.onGlobarSearchInput,
          isLoading = _props.isLoading;


      var globalSearchModalHandler = function globalSearchModalHandler() {
        _this2.setState({
          modal: true
        });
        setTimeout(function () {
          return _this2._typeahead.getInstance().focus();
        }, 200);
      };

      var globalSearchHandler = {
        SHOW_GLOBAL_SEARCH_MODAL: globalSearchModalHandler
      };

      return React.createElement(
        'div',
        { className: 'globalSearchWrapper' },
        React.createElement(GlobalHotKeys, { keyMap: keyMap, handlers: globalSearchHandler, global: true }),
        React.createElement(
          Modal,
          {
            isOpen: this.state.modal,
            fade: false,
            toggle: this.toggle
          },
          React.createElement(
            ModalBody,
            { style: { padding: 0 } },
            React.createElement(AsyncTypeahead, {
              autoFocus: true
              // eslint-disable-next-line no-return-assign
              , ref: function ref(_ref) {
                return _this2._typeahead = _ref;
              },
              id: 'globalSearch',
              labelKey: 'name',
              bsSize: 'large',
              options: searchOptions,
              placeholder: 'Type to search page...'
              // isLoading={isLoading}
              , isLoading: true,
              minLength: 3,
              delay: 300,
              onSearch: onGlobarSearchInput
              // onInputChange={onGlobarSearchInput}
              , onChange: function onChange(selected) {
                window.location.href = selected[0]['moduleUrl'];
              },
              renderMenuItemChildren: function renderMenuItemChildren(option) {
                return React.createElement(
                  'span',
                  null,
                  React.createElement('i', { className: option.icon }),
                  ' ',
                  option.name
                );
              }
            })
          )
        )
      );
    }
  }]);
  return GlobalSearch;
}(Component);

GlobalSearch.propTypes = {
  searchOptions: PropTypes.array,
  onGlobarSearchInput: PropTypes.any,
  isLoading: PropTypes.bool
};

export default GlobalSearch;
//# sourceMappingURL=index.es.js.map
