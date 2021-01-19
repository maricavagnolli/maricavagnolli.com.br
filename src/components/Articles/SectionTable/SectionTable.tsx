import * as React from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

type SectionProps = {
  id: string;
  title: string;
};

type SectionTableProps = {
  sections: [SectionProps];
};

function SectionTable({ sections }: SectionTableProps) {
  return (
    <List
      component="nav"
      aria-label="tabela de seções"
      subheader={<ListSubheader>Seções</ListSubheader>}
    >
      {sections.map(({ id, title }) => (
        <ListItem
          key={id}
          component="a"
          href={`#${id}`}
          style={{ color: "#000" }}
        >
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  );
}

export default SectionTable;
