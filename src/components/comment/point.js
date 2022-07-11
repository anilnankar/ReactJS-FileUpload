import React, { Component } from 'react';
import PointComments from './pointComments';
import { getPointData } from '../../utils/localStorage';

// Creates a constant
const pointRadius = 5;

// Point component to show comment box display
class Point extends Component {
  render() {
    // Create constant from props
    const {
      id,
      selectedPoint,
      newPoint,
      setSelectedPoint,
      image
    } = this.props;

    // Get point data
    const { width, height } = getPointData(this.props);
    const marginTop = height - pointRadius;
    const marginLeft = width - pointRadius;
    return (
      <div
        style={{
          position: 'absolute',
          marginTop,
          marginLeft
        }}
      >
        <div
          onClick={event => {
            event.stopPropagation();
            const newSelectedPoint = id === selectedPoint ? null : id;
            setSelectedPoint(newSelectedPoint);
          }}
        >
          <i class="fa fa-map-marker" style={{fontSize: '25px', color: '#ffa700'}}></i>
        </div>
        <PointComments newPoint={newPoint} pointId={id} image={image}/>
      </div>
    );
  }
}

// Export Point compoenent
export default Point;