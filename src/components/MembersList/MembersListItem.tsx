// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FaceTwoTone } from "@mui/icons-material";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export default function MembersListItem({ member }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FaceTwoTone />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={member.name} secondary={member.email} />
    </ListItem>
  );
}
