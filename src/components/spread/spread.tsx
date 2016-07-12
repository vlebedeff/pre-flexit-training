import * as React from "react";

import {Spread} from "../../models/books/spread";
import {SpreadElement} from "../../models/books/spread_element";

import {SpreadElementComponent} from "./element/element";

interface SpreadComponentProps {
  spread: Spread;
}

export class SpreadComponent extends React.Component<SpreadComponentProps, {}> {  
  render() {
    var elementStyle = {
      transform: "rotate(30deg)"
    }

    return (
      <svg  className="c-spread" viewBox={`0 0 830 400`} width="100%">
        <defs>
          <mask id="left-flat">
            <rect  x="0" y="0" width="50%" height="100%" fill="#fff" />
          </mask>
          <mask id="left-page">
            <rect  x="0" y="0" width="50%" height="100%" fill="#fff" />
          </mask>
          <mask id="spine">
            <rect  x="0" y="0" width="50%" height="100%" fill="#fff" />
          </mask>
          <mask id="right-page">
            <rect x="50%" y="0" width="50%" height="100%" fill="#fff" />
          </mask>
          <mask id="right-flap">
            <rect x="50%" y="0" width="50%" height="100%" fill="#fff" />
          </mask>
          <linearGradient id="overlay--spine--shadow--gradient--left" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" id="overlay--spine--shadow--gradient--stop" />
            <stop offset="100%" id="overlay--spine--shadow--gradient--start" />
          </linearGradient>
          <linearGradient id="overlay--spine--shadow--gradient--right" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" id="overlay--spine--shadow--gradient--start" />
            <stop offset="100%" id="overlay--spine--shadow--gradient--stop" />
          </linearGradient>
        </defs>
        <g id="spread">
          <g id="background">
            <rect width="100%" height="100%" fill="#fff" />
          </g>
          <g id="content">
            {this.props.spread.elements.map((e: SpreadElement) => new SpreadElementComponent({element: e}, {})) }

            <use className="c-element" xlinkHref="/stickers/circle.svg#circle" x="50" y="50" width="50" height="50" fill="red" />
            <use className="c-element" xlinkHref="/stickers/square.svg#square" x="100" y="100" width="50" height="50" fill="green" />
            <use className="c-element" xlinkHref="/stickers/triangle.svg#triangle" x="100" y="100" width="200" height="200" fill="blue" style={elementStyle} />
          </g>
          <g id="overlay">
            <rect id="overlay--spine--darkening" x="400" y="0" width="30" height="100%" />
            <rect id="overlay--spine--shadow--left" x="300" y="0" width="100" height="100%" fill="url(#overlay--spine--shadow--gradient--left)" />
            <rect id="overlay--spine--shadow--right" x="430" y="0" width="100" height="100%" fill="url(#overlay--spine--shadow--gradient--right)" />
          </g>
          <g id="guidelines">
            <line id="guidelines--spine--start" x1="400" y1="0" x2="400" y2="100%" />
            <line id="guidelines--spine--end" x1="430" y1="0" x2="430" y2="100%" />
          </g>
        </g>
      </svg>
    )
  }
}