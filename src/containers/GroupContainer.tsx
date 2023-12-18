// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import GroupView from "@components/GroupView/GroupView";

export default function GroupContainer({ userID }) {
  const [group, setGroup] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isMember, setIsMember] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const handleFetchGroupView = async (groupID) => {
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

        if (currentGroup.members.includes(userID)) {
          setIsMember(true);
        }
        if (currentGroup.owner === userID) {
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

    handleFetchGroupView(id);
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
