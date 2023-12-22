// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import MembersListItem from "@components/MembersList/MembersListItem";
import { List, Typography } from "@mui/material";

export default function MembersList({ members }) {
  return (
    <div>
      <Typography variant="h3" component="h4" fontFamily="Just Another Hand">
        Members:
      </Typography>
      <List>
        {members.map((member) => {
          return <MembersListItem key={member._id} member={member} />;
        })}
      </List>
    </div>
  );
}
