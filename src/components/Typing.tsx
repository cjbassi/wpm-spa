import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  changeCharsTyped,
  changeErrorPercent,
  newText,
} from '../actions/actions'
import { PRINTABLE_CHARACTERS } from '../constants'
import { IStoreState } from '../store'

const typedColor = '#A0A0A0'
const cursorColor = '#BEBEBE'
const errorColor = 'red'
const font = '"Courier New", Courier, monospace'

interface ITypingProps {
  text: string
  newText: () => void
  keydown: any
  changeCharsTyped: (chars: number) => void
  changeErrorPercent: (error: number) => void
}

interface ITypingState {
  cursor: number
  error: null | number
  errors: number
}

class Typing extends React.Component<ITypingProps, ITypingState> {
  public readonly state: ITypingState = {
    cursor: 0,
    error: null,
    errors: 0,
  }

  public componentDidUpdate(prevProps: ITypingProps) {
    const { text, newText, changeCharsTyped, changeErrorPercent } = this.props
    let { cursor, error, errors } = this.state
    const { keydown } = prevProps
    if (prevProps.keydown.event) {
      // if a printable character was just typed
      if (PRINTABLE_CHARACTERS.includes(keydown.event.key)) {
        // set error to current cursor position if we typed an error without any previous errors
        if (error === null && keydown.event.key !== text[cursor]) {
          error = cursor
          errors += 1
          changeErrorPercent(100 * (errors / text.length))
        }
        cursor += 1
        // start a new session if we reach the end without any errors
        if (cursor === text.length && error === null) {
          newText()
          cursor = 0
          error = null
          errors = 0
        }
        // make sure the cursor doesn't go more than 1 past the length if we finish a session with errors
        if (cursor > text.length) {
          cursor -= 1
        }
        this.setState({
          cursor,
          error,
          errors,
        })
      } else if (keydown.event.key === 'Backspace') {
        if (cursor > 0) {
          cursor -= 1
          // checks to see if we can set error to null if we backspaced over it
          error = error === null ? null : cursor > error ? error : null
          this.setState({
            cursor,
            error,
          })
        }
      }
      const chars = error === null ? cursor : error
      changeCharsTyped(chars)
    } else {
      if (prevProps.text !== text) {
        this.setState({
          cursor: 0,
          error: null,
        })
      }
    }
  }

  public render() {
    const { text } = this.props
    const { cursor, error } = this.state
    return (
      <div style={{ fontFamily: font }}>
        {error === null ? (
          <div>
            <mark style={{ color: `${typedColor}`, background: '#FFFFFF' }}>
              {text.slice(0, cursor)}
            </mark>
            <mark style={{ backgroundColor: `${cursorColor}` }}>
              {text[cursor]}
            </mark>
            {text.slice(cursor + 1, text.length)}
          </div>
        ) : (
          <div>
            <mark style={{ color: `${typedColor}`, background: '#FFFFFF' }}>
              {text.slice(0, error)}
            </mark>
            <mark style={{ backgroundColor: `${errorColor}` }}>
              {text.slice(error, cursor)}
            </mark>
            <mark style={{ backgroundColor: `${cursorColor}` }}>
              {text[cursor]}
            </mark>
            {text.slice(cursor + 1, text.length)}
          </div>
        )}
      </div>
    )
  }
}

const matchStateToProps = (state: IStoreState) => {
  return {
    text: state.textData.text,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeCharsTyped: (chars: number) => {
      dispatch(changeCharsTyped(chars))
    },
    changeErrorPercent: (percent: number) => {
      dispatch(changeErrorPercent(percent))
    },
    newText: () => {
      dispatch(newText())
      dispatch(changeCharsTyped(0))
      dispatch(changeErrorPercent(0))
    },
  }
}

export default connect(
  matchStateToProps,
  mapDispatchToProps,
)(Typing)
