import React from 'react';

import { equalTo, get, orderByChild, query, ref } from 'firebase/database';
import { useRouter } from 'next/router';

import { database } from '../../firebase';

// type Props = {};
// 1667226903140
const AddGameRules = () => {
  const router = useRouter();
  const inviteCode = router.query['invite-code'] as string;

  // const dbRef = ref(database, '-NFiSuDwb5ttl3ZGR5jK');
  // dbRef.key?.length

  function getGameData() {
    const que = query(
      ref(database),
      orderByChild('gameId'),
      equalTo(+inviteCode)
    );
    get(que).then((snapshot) => {
      const gameData: string[] = [];
      snapshot.forEach((childSnapshot) => {
        console.log(childSnapshot);
        gameData.push(childSnapshot.val());
      });
      console.log(gameData);
    });
  }
  getGameData();
  return (
    <div>
      AddGameRules
      <div>
        <div>00</div>
        <div>No rules assigned yet!</div>
        <div>Game Rules</div>
      </div>
      <div>Add Icon</div>
      <button
        data-tooltip-target="tooltip-default"
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Default tooltip
      </button>
      <div
        id="tooltip-default"
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
        data-popper-reference-hidden=""
        data-popper-escaped=""
        data-popper-placement="bottom"
      >
        Tooltip content
        <div
          className="tooltip-arrow position: absolute; left: 0px; transform: translate3d(0px, 0px, 0px);"
          data-popper-arrow=""
        ></div>
      </div>
    </div>
  );
};

export default AddGameRules;
