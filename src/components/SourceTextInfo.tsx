import * as React from 'react'

interface IInfoProps {
  author: string
  context: string
}

export default class Info extends React.Component<IInfoProps> {
  public render() {
    const { author, context } = this.props
    return (
      <div>
        -{author}, {context}
      </div>
    )
  }
}
