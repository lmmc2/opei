import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class GenericMenu extends Component {
  state = { activeItem: this.props.items[0] }

  handleItemClick = (e, {name}) => this.setState({ activeItem: this.props.items.find((element, index, array) => element.key === name) })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              {this.props.items.map(item => (
                  <Menu.Item key={item.key} name={item.key} active={activeItem.key === item.key} onClick={this.handleItemClick}>{item.title}</Menu.Item>
              ))}
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <Segment>
                {activeItem.content}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}