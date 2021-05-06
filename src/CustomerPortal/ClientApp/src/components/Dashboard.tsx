import React, { Component } from 'react';
import { IProps } from '../datasources/IProps';

interface IDashboardState {
  currentCount: number;
}

export class Dashboard extends Component<IProps, IDashboardState> {
  static displayName = Dashboard.name;

  constructor(props: IProps) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}