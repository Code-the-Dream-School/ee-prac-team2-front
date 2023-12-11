import { LocalActivity } from "@mui/icons-material";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { ReactElement } from "react";


export interface Activity {
  id: number;
  name: string;
  description: string;
  voteCount: number;
  category: string;
}

interface ActivitiesListProps {
  activities: Activity[];
}

export default function Activities(props: ActivitiesListProps): ReactElement {
  return (
    <>
      <Container maxWidth="sm">
        <List
          sx={{
            width: "100%",
          }}
        >
          {props.activities.map((activity) => (
            <ListItem
              key={activity.id}
              alignItems="center"
              divider={true}
              sx={{
                margin: 2,
              }}
            >
              <ListItemIcon>
                <LocalActivity fontSize="large" />
              </ListItemIcon>

              <ListItemText
                primary={activity.name}
                secondary={
                  <>
                    <p>{activity.category}</p>
                    <p>{activity.description}</p>
                  </>
                }
                sx={{
                  margin: 1,
                }}
              />
              <ListItemIcon
                sx={{
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderRadius: 50,
                  paddingTop: 1,
                  paddingBottom: 1,
                  marginLeft: 1,
                  justifyContent: "center",
                }}
              >
                {activity.voteCount}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}
