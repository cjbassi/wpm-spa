import * as React from 'react'
import keydown from 'react-keydown'
import Info from '../containers/SourceTextInfo'
import Stats from '../containers/StatsBar'
import Typing from '../containers/Typing'
import Buttons from '../containers/Buttons'

interface IAppProps {
  author: string | null;
  keydown?: any;
}

@keydown
export default class App extends React.Component<IAppProps> {
  public render() {
    const { author, keydown } = this.props
    return (
      <div>
        <h3>
          <a href='https://github.com/cjbassi/wpm-react'>wpm-react</a>
        </h3>
        <Buttons />
        <br />
        <Stats />
        <br />
        <Typing keydown={keydown} />
          {(author !== null) &&
            <div>
              <br />
              <Info />
            </div>
      }
      </div >
    )
  }
}
