import React from 'react';
import { Cell } from './components/cells';

export const Iterator = ({ config, value }) => {
  const rec = (conf, val) => {
    console.log(conf.group);
    return (
      <>
        <p>{conf?.group?.name}</p>
        {Object.keys(conf).map((c) => {
          if (c != 'group') {
            if (typeof val[c] === 'object') {
              return rec(conf[c], val[c]);
            } else {
              return (
                <Cell
                  config={conf[c]}
                  value={val[c]}
                  key={Math.random()}
                ></Cell>
              );
            }
          }
        })}
      </>
    );
  };

  return <>{rec(config, value)}</>;
};
