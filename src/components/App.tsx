import * as React from 'react'
import keydown from 'react-keydown'
import { connect } from 'react-redux'

import Buttons from '../components/Buttons'
import Info from '../components/SourceTextInfo'
import Stats from '../components/StatsBar'
import Typing from '../components/Typing'
import { IStoreState } from '../store'

interface IAppProps {
  author: string | null
  keydown?: any
}

@keydown
class App extends React.Component<IAppProps> {
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
        {author !== null && (
          <div>
            <br />
            <Info />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state: IStoreState) => {
  return {
    author: state.textInfo.author,
  }
}

export default connect(mapStateToProps)(App)
