import React, { useState } from 'react';

export default function CopyEmail() {
  const [state, setState] = useState('samuelho343@gmail.com');

  return (
    <h5
      className="text-2xl hover:cursor-pointer"
      onMouseOver={() => void setState('Copy to clipboard.')}
      onMouseLeave={() => void setState('samuelho343@gmail.com')}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText('samuelho343@gmail.com');
          setState('Copied!');
        } catch {
          console.log('An error occured during copying.');
          setState('samuelho343@gmail.com');
        }
      }}
    >
      {`Email : ${state}`}
    </h5>
  );
}
