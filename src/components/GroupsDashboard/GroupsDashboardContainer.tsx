// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios";
import { useEffect, useState } from "react";

import GroupsDashboard from "./GroupsDashboard";

const GroupsDashboardContainer = ({ setGroupCount }) => {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}groups`,
          {
            headers: {
              "Cache-Control": "no-cache",
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        const fetchedGroups = response.data;
        setGroups(fetchedGroups.groups);
        setGroupCount(fetchedGroups.count);
        setIsLoading(false);
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

    fetchGroups();
  }, []);

  return <GroupsDashboard groups={groups} isLoading={isLoading} />;
};

export default GroupsDashboardContainer;
