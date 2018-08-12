"use strict";

const Ship = require("../class/ship");

// const buildTimeInSeconds = 5;


let pad1 = { ship: null, bought: true,  $title: $("#pad1 h1"), $content: $("#pad1 .content") };
let pad2 = { ship: null, bought: false, $title: $("#pad1 h1"), $content: $("#pad2 .content") };
let pad3 = { ship: null, bought: false, $title: $("#pad1 h1"), $content: $("#pad3 .content") };

module.exports = {
  
  setup() {
    // TODO: Custom drop action to add to Ship instance
    // TODO: Make sure Person instance is removed from "people" array in "people.js"
    
    // dnd.addTarget($(".launchpad"), {sticky: true});
    
    pad1.ship = new Ship();
    
    this.redraw(pad1);
    this.redraw(pad2);
    this.redraw(pad3);
    
    // $("#build-ship").click(this.startBuild.bind(this));
    // this.ship = $(".ship")[0];
  },
  
  // startBuild() {
  //   if (this.ships.count < this.maxShips) {
  //     this.ships.push(new Ship());
  //   }
  //   setTimeout(this.deliverShip.bind(this), buildTimeInSeconds * 1000);
  //   console.log("Started building ship!");
  // },
  
  redraw(pad) {
    pad.$content.empty();
    if (pad.ship != null) {
      pad.$content.append(pad.ship.toHTML());
      pad.ship.setupDragTarget(this.redraw.bind(this, pad));
    } else if (pad.bought) {
      // TODO: Render empty pad + 'build' button
      pad.$content.append($("<span>", {text: "Empty"}));
    } else {
      // TODO: Render locked pad + 'buy' button
      pad.$content.append($("<span>", {text: "Locked"}));
    }
  },

  deliverShip() {
    $(".ship").addClass("built");
    console.log("Ship has been delivered!");
  }
};