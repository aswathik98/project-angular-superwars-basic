import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    class Supers{
      
    }
    let players :String[]=[
      "Spiderman",
      "Captain America",
      "Wonderwoman",
      "Popcorn",
      "Gemwoman",
      "Bolt",
      "Antwoman",
      "Mask",
      "Tiger",
      "Captain",
      "Catwoman",
      "Fish",
      "Hulk",
      "Ninja",
      "Black Cat",
      "Volverine",
      "Thor",
      "Slayer",
      "Vader",
      "Slingo"
  ];
    this.viewPlayers(this.initPlayers(players));
  }  

  // initialize players with image and strength
  initPlayers = (players) => {
      let detailedPlayers :any;
      detailedPlayers = players.map((value, index) => ({
          name: players[index],
          strength: this.getRandomStrength(),
          image: '../../assets/super-' + (index + 1) + '.png',
          type: "hero|villian"
      }));
      return detailedPlayers;
  }

  // getting random strength
  getRandomStrength():any {
      return Math.ceil(Math.random() * 100+1);
  }

  // Build player template
  buildPlayers = (players, type) => {
      let fragment :string = '';
      var indexList = [];
      if (type == "hero") { 
          players.map((item, index) => {
              if (index % 2 == 0) 
                  indexList.push(index);
          });
      } else {
          players.map((item, index) => {
              if (index % 2 != 0)
                  indexList.push(index);
          });
      }

      fragment += indexList.map((index)=> `<div class="player">
              <img src="${players[index].image}" alt="">
              <div class="name">${players[index].name}</div>
              <div class="strength">${players[index].strength}</div></div>`
      );  
      for (let index = 0; index < indexList.length; index++) {
        const element = indexList[index]; 
        console.log("PLAYER "+index+players[index].name,players[index].image,players[index].strength,fragment);
      }
      return fragment;
  }

  // Display players in HTML
  viewPlayers = (players) => {
      document.getElementById('heroes').innerHTML = this.buildPlayers(players, 'hero');
      document.getElementById('villains').innerHTML = this.buildPlayers(players, 'villain');
  }

  }


