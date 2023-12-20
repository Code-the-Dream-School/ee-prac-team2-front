// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { GroupTwoTone } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";

const GroupsDashboard = ({ groups, isLoading, userID }) => {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Box>
          <List>
            {groups.map((group) => {
              return (
                <ListItem key={group._id}>
                  <ListItemButton divider>
                    <ListItemIcon>
                      <GroupTwoTone color="success" />
                    </ListItemIcon>
                    <Link to={`/groups/${group._id}`} state={{ userID }}>
                      {group.groupName}
                    </Link>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}
    </div>
  );
};

export default GroupsDashboard;
