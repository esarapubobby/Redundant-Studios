import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const DiscordIcon = ({ size = 16, color, className, style }) => (
  <FontAwesomeIcon
    icon={faDiscord}
    style={{ width: size, height: size, color, display: 'inline-block', ...style }}
    className={className}
  />
);

export default DiscordIcon;