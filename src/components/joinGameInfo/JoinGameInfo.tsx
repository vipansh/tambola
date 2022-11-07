import React, { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';

const JoinGameInfo = () => {
  const router = useRouter();
  const inviteCode = router.query['invite-code'] as string;
  const [step, setStep] = useState(1);
  const renderCount = useRef(0);
  const invitationCodeRef = useRef<HTMLInputElement>(null);

  // console.log({ step, inviteCode, render: renderCount.current });
  renderCount.current += 1;

  const userNameRef = useRef<HTMLInputElement>(null);
  console.log('i am rendering', inviteCode, Date.now());

  const incrimentStep = () => {
    setStep((val) => {
      return val + 1;
    });
  };

  const handleEnteringInvitationCode = () => {
    if (invitationCodeRef) {
      incrimentStep();
      router.push({
        pathname: router.pathname,
        query: {
          'invite-code': invitationCodeRef?.current?.value,
        },
      });
    }
  };
  const handleEnteringUserName = () => {
    if (userNameRef) {
      incrimentStep();
    }
  };

  useEffect(() => {
    if (inviteCode && step !== 2) setStep(2);
    if (!inviteCode && step !== 1) setStep(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inviteCode]);

  return (
    <div>
      {/* \step 1  entering invitaion code */}
      <div className={step === 1 ? '' : 'hidden'}>
        <label htmlFor="company"> Enter invitation code:</label>
        <input
          type="text"
          id="company"
          className="border border-gray-300 text-gray-00 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter invite code"
          required
          ref={invitationCodeRef}
        />
        <button onClick={handleEnteringInvitationCode}>Join Game</button>
      </div>

      {/* step 2  intering name */}
      <div className={step === 2 ? '' : 'hidden'}>
        <label htmlFor="company"> Enter Your name </label>
        <input
          type="text"
          id="company"
          className="border border-gray-300 text-gray-00 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter invite code"
          required
          ref={userNameRef}
        />
        <button onClick={handleEnteringUserName}>Join Game</button>
      </div>

      <div className={step === 3 ? '' : 'hidden'}>
        <label htmlFor="company"> Waiting fro host to join the game </label>
        game id : {inviteCode}
      </div>
    </div>
  );
};

export default JoinGameInfo;
