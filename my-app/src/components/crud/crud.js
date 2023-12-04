import React, { useEffect, useState } from "react";
import { db } from "../../config2";
import { getDocs, collection } from "firebase/firestore"; //oro documentum njmk access cheyyan firebase inganoru function therunnd

function Crud() {
  const [channelList, setChannelList] = useState([]);

  //collectionte refrence oru variableil vekkam
  const channelCollectionRef = collection(db, "ytChannels");

  //value fetch cheyyan oru function create cheyyenm databasenu value fetch cheyyunond ithu async function aarikum
  const getchannelList = async () => {
    const data = await getDocs(channelCollectionRef);
    // console.log(data);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    // console.log(filteredData);
    setChannelList(filteredData);
  };

  //eppalan ee databasebnu ee value fetch cheyyendath/ee function eppalan work cheyyendath initially app load cheyyumbm aanu work cheyyendath appm useEffect call cheyyam

  useEffect(() => {
    getchannelList();
  }, []);

  return (
    <div>
      {channelList.map((channel) => {
        <div key={channel.id}>
          name : {channel.channelName}
          isMonitized : {channel.isMonitized}
          subs : {channel.subs}
        </div>;
      })}
    </div>
  );
}

export default Crud;
