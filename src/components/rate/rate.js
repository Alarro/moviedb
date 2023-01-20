import { Rate } from 'antd';
import React from 'react';
import { Component } from 'react';

export default class Rating extends Component {
  render() {
    const { rateFilm, id } = this.props;
    return (
      <Rate
        defaultValue={localStorage.getItem(id)}
        count={10}
        onChange={rateFilm}
        style={{ transform: 'scale(0.9)' }}
      />
    );
  }
}