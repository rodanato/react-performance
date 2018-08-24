// @flow

import React from "react";

import {withStyles}    from "@material-ui/core/styles";
import GridList        from "@material-ui/core/GridList";
import GridListTile    from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton      from "@material-ui/core/IconButton";
import StarBorderIcon  from "@material-ui/icons/StarBorder";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
});

const worldsData = [
  {
    img: "https://auto.ndtvimg.com/car-images/big/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg?v=51",
    title: "carro azul",
    author: "author",
    featured: true
  },
  {
    img: "https://www.advantage.com/wp-content/plugins/advantage-vehicles/assets/SCAR_800x400.png",
    title: "carro rojo",
    author: "author",
    featured: true
  }
];

function AdvancedGridList(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {worldsData.map(tile => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title}/>
            <GridListTileBar
              title={tile.title}
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
}

export default withStyles(styles)(AdvancedGridList);
