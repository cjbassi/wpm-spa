import * as React from 'react'
import keydown from 'react-keydown'
import Info from '../containers/SourceTextInfo'
import Stats from '../containers/StatsBar'
import Typing from '../containers/Typing'
import Buttons from '../containers/Buttons'

interface IAppProps {
  mode: string;
  keydown?: any;
}

@keydown
export default class App extends React.Component<IAppProps> {
  public render() {
    const { mode, keydown } = this.props
    return (
      <div>
        <Buttons />
        <br />
        <Stats />
        <br />
        <Typing keydown={keydown} />
        {(mode === 'quote') &&
          <div>
            <br />
            <Info />
          </div>
        }
      </div>
    )
  }
}
