import React, { Component } from 'react';
import "./pages/pageDefaults.scss";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: './hpApp/signIn.png',
    altText: 'Sign in page for the app',
    caption: 'Sign In Page'
  },
  {
    src: './hpApp/resetPassword.png',
    caption: 'Reset Password Page',
  },
  {
    src: './hpApp/register1.png',
    caption: '1st Step Registration',
  },
  {
    src: './hpApp/register2.png',
    caption: '2nd Step Registration',
  },
  {
    src: './hpApp/register3.png',
    caption: '3rd Step Registration',
  },
  {
    src: './hpApp/menu.png',
    caption: 'Menu',
  },
  {
    src: './hpApp/dashboard.png',
    caption: 'Dashboard',
  },
  {
    src: './hpApp/profile.png',
    caption: 'Profile',
  },
  {
    src: './hpApp/apptHistory.png',
    caption: 'Appointment History',
  },
  {
    src: './hpApp/vetOutcome.png',
    caption: 'Outcome Report',
  },
  {
    src: './hpApp/upcomingAppointments.png',
    caption: 'Upcoming Appointments',
  },
  {
    src: './hpApp/petList.png',
    caption: 'Pet List',
  },
  {
    src: './hpApp/petList2.png',
    caption: 'Pet List',
  },
  {
    src: './hpApp/petDashboard.png',
    caption: 'Pet Dashboard',
  },
  {
    src: './hpApp/editPet.png',
    caption: 'Edit Pet',
  }, 
  {
    src: './hpApp/editPet2.png',
    caption: 'Edit Pet',
  },
  {
    src: './hpApp/addPet.png',
    caption: 'Add Pet',
  },
  {
    src: './hpApp/booking1User.png',
    caption: '1st Step Booking User',
  },
  {
    src: './hpApp/booking1Guest.png',
    caption: '1st Step Booking Guest',
  },
  {
    src: './hpApp/booking2.png',
    caption: '2nd Step Booking',
  },
  {
    src: './hpApp/booking3.png',
    caption: '3rd Step Booking',
  },
  {
    src: './hpApp/booking4.png',
    caption: '4th Step Booking',
  },
];

class CarouselImages extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (

        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          
          <h1 className="text-md-center">{item.caption}</h1><br /><br />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselImages;