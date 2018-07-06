import * as React from 'react'

interface IStatsProps {
  chars: number;
  errorPercent: number;
}

interface IStatsState {
  timer: any;
  hundredths: number;
  chars: number;
}

export default class Stats extends React.Component<IStatsProps,IStatsState> {
  public readonly state: IStatsState = {
    timer: null,
    hundredths: 0,
    chars: this.props.chars,
  }

  private startTimer = () => {
    this.setState({
      timer: setInterval(this.tick, 10),
      hundredths: 0,
    })
  }

  private tick = () => {
    this.setState({
      hundredths: this.state.hundredths + 1,
    })
  }

  private stopTimer = () => {
    clearInterval(this.state.timer)
  }

  public componentDidUpdate(prevProps: IStatsProps, prevState: IStatsState) {
    if (this.props === prevProps) {
      return
    }
    const { chars } = this.props
    if (prevProps.chars === 0 && chars === 1) {
      this.startTimer()
      this.setState({
        chars,
      })
    } else if (prevProps.chars !== 0 && chars === 0) {
      this.stopTimer()
      this.setState({
        chars: prevProps.chars,
      })
    } else {
      this.setState({
        chars,
      })
    }
  }

  public render() {
    const { chars, hundredths } = this.state
    const { errorPercent } = this.props
    const sec = (hundredths / 100)
    const wpm = (sec === 0) ? 0 : (chars / 5) / (sec / 60)
    const cps = (sec === 0) ? 0 : (chars / sec)
    return (
      <div>
        {wpm.toFixed(0).padStart(3,'0')} wpm{' '}
        {cps.toFixed(1).padStart(4,'0')} cps{' '}
        {(100-errorPercent).toFixed(2).padStart(6,'0')}% acc{' '}
        {sec.toFixed(1)}s
      </div>
    )
  }
}
