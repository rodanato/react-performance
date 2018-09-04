// @flow
import React           from "react";
import {withStyles}    from "@material-ui/core/styles";
import GridList        from "@material-ui/core/GridList";
import GridListTile    from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton      from "@material-ui/core/IconButton";
import StarBorderIcon  from "@material-ui/icons/StarBorder";
import {GridStyles}    from "./grid.styles";

const AdvancedGridList = (props) => {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {props.list.map((world, k) => (
          <GridListTile
            key={k}
            cols={world.featured ? 2 : 1}
            rows={world.featured ? 2 : 1}
          >
            <img src={world.img} alt={world.title}/>
            <GridListTileBar
              title={world.title}
              titlePosition="top"
              actionIcon={
                <IconButton className={classes.icon}>
                  <StarBorderIcon/>
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withStyles(GridStyles)(AdvancedGridList);