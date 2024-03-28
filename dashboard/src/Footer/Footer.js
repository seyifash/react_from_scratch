import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const isIndex = true;

const Footer = () => {
  return (
    <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
    </div>
  )
}

export default Footer