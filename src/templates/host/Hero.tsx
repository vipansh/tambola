import React from 'react';

import CopyInviteCode from '../../components/copyInviteCode/CopyInviteCode';

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto flex  align al">
        Hero
        <div>
          <p>Invite your friends using the invite code:</p>
          <CopyInviteCode code={'29803475029'} />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
