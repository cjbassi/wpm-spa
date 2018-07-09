import * as React from 'react'
import { Mode } from '../constants'

interface IButtonProps {
  newText: (mode?: string, words?: string[]) => any
}

interface IButtonState {
  ref1: any
  ref2: any
  ref3: any
  ref4: any
  repeatedWordsMode: boolean
  input: string
}

export default class Button extends React.Component<IButtonProps, IButtonState> {
  public readonly state: IButtonState = {
    input: '',
    ref1: React.createRef(),
    ref2: React.createRef(),
    ref3: React.createRef(),
    ref4: React.createRef(),
    repeatedWordsMode: false,
  }

  private handleChange = (event: any): void => {
    this.setState({ input: event.target.value })
  }

  private handleSubmit = (event: any): void => {
    this.props.newText(Mode.repeatedWords, this.state.input.split(' '))
    event.preventDefault()
  }

  private renderModeButton(ref: any, mode: string) {
    return (
      <button
        ref={ref}
        onClick={() => {
          this.setState({ repeatedWordsMode: false })
          this.props.newText(mode)
          ref.current.blur()
        }}
      >
        {mode}
      </button>
    )
  }

  public render() {
    const { ref1, ref2, ref3, ref4, repeatedWordsMode } = this.state
    return (
      <div>
        {this.renderModeButton(ref1, Mode.quote)}
        {this.renderModeButton(ref2, Mode.random)}
        {this.renderModeButton(ref3, Mode.code)}
        <button
          ref={ref4}
          onClick={() => {
            this.setState({ repeatedWordsMode: !this.state.repeatedWordsMode })
            ref4.current.blur()
          }}
        >
          {Mode.repeatedWords}
        </button>
        {repeatedWordsMode && (
          <div style={{ display: 'inline' }}>
            {' '}
            <form style={{ display: 'inline' }} onSubmit={this.handleSubmit}>
              <input
                type='text'
                value={this.state.input}
                onChange={this.handleChange}
              />
              <input type='submit' value='Submit' />
            </form>
          </div>
        )}
      </div>
    )
  }
}
