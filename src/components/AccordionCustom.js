import React, { Component } from 'react'
import { Accordion } from 'semantic-ui-react'

export default class AccordionCustom extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion styled fluid>
        {this.props.items.map((item, index) => (
          <div key={index}>
            <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
              {item.title}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
              {item.content}
            </Accordion.Content>
          </div>
        ))}
      </Accordion>
    );
  }
}
