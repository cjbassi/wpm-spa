import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import styled from 'styled-components'

import {
  changeCharsTyped,
  changeErrorPercent,
  newText,
} from '../actions/actions'
import { PRINTABLE_CHARACTERS } from '../constants'
import { IStoreState } from '../store'

const TYPED_COLOR = '#A0A0A0'
const CURSOR_COLOR = '#BEBEBE'
const ERROR_COLOR = 'red'
const FONT = '"Courier New", Courier, monospace'

const FontCSS = styled.div`
  font-family: ${FONT};
`

const InlineCSS = styled.div`
  display: inline;
`

const TypedColorCSS = styled.mark`
  color: ${TYPED_COLOR};
  background: #ffffff;
`

const ErrorColorCSS = styled.mark`
  background-color: ${ERROR_COLOR};
`

const CursorColorCSS = styled.mark`
  background-color: ${CURSOR_COLOR};
`

interface ITypingProps {
  text: string
  newText: () => void
  keydown: any
  changeCharsTyped: (chars: number) => void
  changeErrorPercent: (error: number) => void
}

interface ITypingState {
  cursorPosition: number
  errorPosition: number | null
  errorSum: number
}

class Typing extends React.Component<ITypingProps, ITypingState> {
  public readonly state: ITypingState = {
    cursorPosition: 0,
    errorPosition: null,
    errorSum: 0,
  }

  public componentDidUpdate(prevProps: ITypingProps) {
    // tslint:disable-next-line:no-shadowed-variable
    const { text, newText, changeCharsTyped, changeErrorPercent } = this.props
    let { cursorPosition, errorPosition, errorSum } = this.state
    const { keydown } = prevProps
    if (prevProps.keydown.event) {
      if (PRINTABLE_CHARACTERS.includes(keydown.event.key)) {
        // if a printable character was just typed
        if (
          errorPosition === null &&
          keydown.event.key !== text[cursorPosition]
        ) {
          // set errorPosition to cursorPosition if we typed an error without any outstanding errors
          errorPosition = cursorPosition
          errorSum += 1
          changeErrorPercent(100 * (errorSum / text.length))
        }
        cursorPosition += 1
        // start a new session if we reach the end with no outstanding errors
        if (cursorPosition === text.length && errorPosition === null) {
          newText()
          cursorPosition = 0
          errorPosition = null
          errorSum = 0
        }
        // make sure the cursor doesn't go more than 1 past the length if we finish a session with outstanding errors
        if (cursorPosition > text.length) {
          cursorPosition -= 1
        }
        this.setState({
          cursorPosition,
          errorPosition,
          errorSum,
        })
      } else if (keydown.event.key === 'Backspace') {
        if (cursorPosition > 0) {
          cursorPosition -= 1
          // checks to see if we can set errorPosition to null if we backspaced over it
          errorPosition =
            errorPosition === null
              ? null
              : cursorPosition > errorPosition
                ? errorPosition
                : null
          this.setState({
            cursorPosition,
            errorPosition,
          })
        }
      }
      const chars = errorPosition === null ? cursorPosition : errorPosition
      changeCharsTyped(chars)
    } else if (prevProps.text !== text) {
      this.setState({
        cursorPosition: 0,
        errorPosition: null,
      })
    }
  }

  public render() {
    const { text } = this.props
    const { cursorPosition, errorPosition } = this.state
    return (
      <FontCSS>
        {errorPosition === null ? (
          <TypedColorCSS>{text.slice(0, cursorPosition)}</TypedColorCSS>
        ) : (
          <InlineCSS>
            <TypedColorCSS>{text.slice(0, errorPosition)}</TypedColorCSS>
            <ErrorColorCSS>
              {text.slice(errorPosition, cursorPosition)}
            </ErrorColorCSS>
          </InlineCSS>
        )}
        <CursorColorCSS>{text[cursorPosition]}</CursorColorCSS>
        {text.slice(cursorPosition + 1, text.length)}
      </FontCSS>
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
