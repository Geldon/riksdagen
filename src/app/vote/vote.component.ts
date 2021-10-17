import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RiksdagenService} from "../services/riksdagen.service";
import {IPartiVote} from "../../models/vote.interface";
import {Partibeteckning} from "../../models/partibeteckning.enum";
import {PartiService} from "../services/parti.service";
import {IPersonMedVotering} from "../../models/voteringFraga.interface";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  vote: IPersonMedVotering | undefined;

  constructor(private riksdagenService: RiksdagenService,
              private actRoute: ActivatedRoute,
              private partiService: PartiService) {
    this.vote = riksdagenService.getVoteringItem()
  }

  ngOnInit(): void {
  }

  getPartiName(partiBeteckning: Partibeteckning) {
    return this.partiService.getPartiName(partiBeteckning)
  }

  getPercentage(numOfVotes: number, vote: IPartiVote) {
    return (numOfVotes / (vote.antalJa + vote.antalNej + vote.antalFranvarande + vote.antalAvsta)) * 100;
  }
}
