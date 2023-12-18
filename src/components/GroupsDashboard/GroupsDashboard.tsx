// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Link } from "react-router-dom";

const GroupsDashboard = ({ groups }) => {
  return (
    <div>
      <ul>
        {groups.map((group) => {
          return (
            <li key={group._id}>
              <Link to={"/groups/:id"}>{group.groupName}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GroupsDashboard;