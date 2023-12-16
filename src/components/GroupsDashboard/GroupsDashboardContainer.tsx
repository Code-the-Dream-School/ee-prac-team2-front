import axios from "axios";
import { useEffect, useState } from "react";

import GroupsDashboard from "./GroupsDashboard";

const GroupsDashboardContainer = ({ groupCount, setGroupCount }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get(
          "https://dn-live-test.onrender.com/api/v1/groups",
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

  return (
    <div>
      {groups.length > 0 ? (
        <GroupsDashboard groups={groups} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GroupsDashboardContainer;
