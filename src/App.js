import React from 'react';
import './style.css';
import { config } from './sample/config';
import { value } from './sample/value';
import { Iterator } from './iterator';

export default function Rdf() {
  return (
    <div>
      <Iterator config={config} value={value} />
    </div>
  );
}
