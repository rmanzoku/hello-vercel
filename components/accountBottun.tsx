import Link from 'next/link'
import React from 'react'

interface Props {
}
interface State {
    locked: boolean
    status: string
}

export default class AccountBotton extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            locked: true,
            status: "Lock"
        }
    }

    private handleClick = (e: React.MouseEvent) => {
        this.setState({
            locked: !this.state.locked,
            status: this.state.locked ? "Unlock" : "Lock"
        })
    }

    render = () => {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.status}
                </button>
            </div>
        )
    }
}

