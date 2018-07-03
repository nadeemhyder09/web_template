import React from 'react';
import Masonry from 'react-masonry-component';


const masonryOptions = {
  layoutMode: 'fitRows',
  gutter: 0,
  itemSelector: '.item',
  percentPosition: true,
  fitWidth: true,
  columnWidth: 80
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Grid extends React.Component {
    render() {
        const childElements = this.props.elements.map(function(element, id){
           return (
              <li key={id} className="item">
                <img src={element.src} />
              </li>
            );
        });
    
        return (
            <Masonry
                className={'grid'} //  // default 'div'
                elementType={'ul'}
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}
 
export default Grid;
