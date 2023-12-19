import React, { useEffect, useState } from "react";
import { db } from "../../config2";
import { getDocs, collection } from "firebase/firestore"; 

function Crud() {
  const [channelList, setChannelList] = useState([]);


  const channelCollectionRef = collection(db, "ytChannels");

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
