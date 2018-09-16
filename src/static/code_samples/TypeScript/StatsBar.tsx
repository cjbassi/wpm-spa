import * as React from 'react'

interface IStatsProps {
  chars: number
  errorPercent: number
}

interface IStatsState {
  timer: any
  hundredths: number
  chars: number
}

export default class Stats extends React.Component<IStatsProps, IStatsState> {
  public readonly state: IStatsState = {
    chars: this.props.chars,
    hundredths: 0,
    timer: null,
  }

  private startTimer = () => {
    this.setState({
      hundredths: 0,
      timer: setInterval(this.tick, 10),
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
        <span>{wpm.toFixed(0).padStart(3, '0')} wpm</span>
        <span> {cps.toFixed(1).padStart(4, '0')} cps</span>
        <span> {(100 - errorPercent).toFixed(2).padStart(6, '0')}% acc</span>
        <span> {sec.toFixed(1)}s</span>
      </div>
    )
  }
}
