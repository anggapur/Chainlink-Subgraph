import { BigInt } from "@graphprotocol/graph-ts"
import { RoundDetailsUpdated, NewRound, AnswerUpdated } from '../generated/AccessControlledAggregator/AccessControlledAggregator';
import { Feed, Round } from "../generated/schema"

import { AccessControlledAggregator } from '../generated/AccessControlledAggregator/AccessControlledAggregator';


export function handleRoundDetailsUpdated(
    event: RoundDetailsUpdated
  ): void {

    let contract = AccessControlledAggregator.bind(event.address)    

    let newFeed = new Feed(event.address.toHex())
    newFeed.contractAddress = event.address.toHex();    
    newFeed.name = contract.description();    
    newFeed.version = contract.version().toI32();
    newFeed.save()
  }

export function handlerNewRound(event: NewRound): void {

    // Create or Find feed
    let feed = Feed.load(event.address.toHex()) || new Feed(event.address.toHex());
    
    // Create New Round
    let newRound = new Round(event.address.toHex().concat("/").concat(event.params.roundId.toString()))
    newRound.number = event.params.roundId
    newRound.feed = feed.id
    newRound.unixTimestamp = event.params.startedAt.toI32()
    newRound.value = null
    newRound.save();
}

export function handleAnswerUpdated(event: AnswerUpdated): void {
    // Update value and time of round
    let round = Round.load(event.address.toHex().concat("/").concat(event.params.roundId.toString()));
    if(round !== null) {
        round.unixTimestamp = event.params.updatedAt.toI32()
        round.value = event.params.current;
        round.save();
    }
}