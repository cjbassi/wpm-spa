import * as React from 'react'

interface IButtonProps {
  changeMode: (mode: string) => any;
  newText: () => any;
}

interface IButtonState {
  ref1: any;
  ref2: any;
  ref3: any;
}

export default class Button extends React.Component<IButtonProps,IButtonState> {
  public readonly state: IButtonState = {
    ref1: React.createRef(),
    ref2: React.createRef(),
    ref3: React.createRef(),
  }

  public render() {
    const { changeMode, newText } = this.props
    const { ref1, ref2, ref3 } = this.state
    return (
      <div>
        <button ref={ref1} onClick={() => {changeMode('quote'); newText(); ref1.current.blur()}}>
          quote
        </button>
        <button ref={ref2} onClick={() => {changeMode('random'); newText(); ref2.current.blur()}}>
          random
        </button>
        <button ref={ref3} onClick={() => {changeMode('code'); newText(); ref3.current.blur()}}>
          code
        </button>
      </div>
    )
  }
}
