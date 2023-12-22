// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import GroupView from "@components/GroupView/GroupView";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function GroupContainer() {
  const [group, setGroup] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isMember, setIsMember] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const { id } = useParams();

  const location = useLocation();
  const userID = location.state?.userID;

  useEffect(() => {
    const handleFetchGroupView = async (groupID, userID) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}groups/${groupID}`,
          {
            headers: {
              "Cache-Control": "no-cache",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        const currentGroup = response.data;

        setGroup(currentGroup);
        setIsLoading(false);

        if (currentGroup.members.some((member) => member._id === userID)) {
          setIsMember(true);
        }
        if (currentGroup.owner._id === userID) {
          setIsOwner(true);
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
        if (axios.isAxiosError(error)) {
          return {
            data: "API request failed! Did you remember to `npm run dev` the backend app?",
          };
        }
        return {
          data: "A fetching data error occurred.",
        };
      }
    };

    handleFetchGroupView(id, userID);
  }, []);
  return (
    <GroupView
      group={group}
      isLoading={isLoading}
      isMember={isMember}
      isOwner={isOwner}
    />
  );
}
