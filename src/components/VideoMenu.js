import React, { Component } from 'react'
import { Grid, Menu, Segment, Embed } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/carousel.css';



export default class VideoMenu extends Component {
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
              <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={false}
              autoPlay={false}>
                  {activeItem.videos.map(video => (
                      <Embed key={video} id={video} source='youtube' placeholder="https://res.cloudinary.com/dkbuneg9h/image/upload/v1492118391/Prepare-se2_q5eozu.png"/>
                  ))}
              </Carousel>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}