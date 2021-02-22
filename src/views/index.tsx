import React from 'react';
import HeroPartial from './partials/home-hero';
import TestimonialsPartial from './partials/home-testimonials';

export default class IndexView extends React.Component {
  render() {
    return (
      <div>
        <HeroPartial />
        <TestimonialsPartial />
      </div>
    )
  }
}