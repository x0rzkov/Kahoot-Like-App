import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../animations/fadeInOut.animation';
import { blockInitialRender } from '../../animations/blockInitialRender.animation';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css'],
  animations: [
    fadeInOut,
    // Work around so buttons aren't animated on page load
    blockInitialRender
  ]
})

export class InitialComponent implements OnInit {
  private joinGame: boolean; // True if user clicks first join game button

  public ngOnInit(): void {
    this.joinGame = false;
  }

  public toggleJoinGame(): void {
    this.joinGame = !this.joinGame;
  }
}