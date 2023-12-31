// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { LocalActivity } from "@mui/icons-material";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { ReactElement } from "react";

export interface Voter {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Vote {
  _id: string;
  activityID: string;
  voters: Voter[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type Activity = {
  _id: string;
  activity: string;
  type: string;
};

export interface EventActivity extends Activity {
  vote: Vote;
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
          {props.activities.map(({ _id, activity, type, vote }) => (
            <ListItem
              key={_id}
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
                primary={activity}
                secondary={
                  <>
                    <span>{type}</span>
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
                {vote?.voters?.length ?? 0}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}
