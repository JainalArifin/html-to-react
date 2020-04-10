import React from 'react'
import propsTypes from 'prop-types';

export default function Button(props) {
  const className = ["button"];
  if(props.isPrimary) className.push("button-primary");
  if(props.isWideMobile) className.push("button-wide-mobile");
  if(props.isSmall) className.push("button-sm");
  if(props.isBlock) className.push("button-block");
  return <button className={className.join(" ")} >{props.children}</button>
}

Button.PropsTypes = {
  isPrimary: propsTypes.bool,
  isWideMobile: propsTypes.bool,
  isSmall: propsTypes.bool,
  isBlock: propsTypes.bool
}