import { BigInt } from "@graphprotocol/graph-ts"
import {
  AccessControlledOffchainAggregator,
  AddedAccess,
  AnswerUpdated,
  BillingAccessControllerSet,
  BillingSet,
  CheckAccessDisabled,
  CheckAccessEnabled,
  ConfigSet,
  NewRound,
  NewTransmission,
  OraclePaid,
  OwnershipTransferRequested,
  OwnershipTransferred,
  PayeeshipTransferRequested,
  PayeeshipTransferred,
  RemovedAccess,
  RequesterAccessControllerSet,
  RoundRequested,
  ValidatorUpdated
} from "../generated/AccessControlledOffchainAggregator/AccessControlledOffchainAggregator"
import { ExampleEntity } from "../generated/schema"

export function handleAddedAccess(event: AddedAccess): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.user = event.params.user

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.LINK(...)
  // - contract.billingAccessController(...)
  // - contract.checkEnabled(...)
  // - contract.decimals(...)
  // - contract.description(...)
  // - contract.getAnswer(...)
  // - contract.getBilling(...)
  // - contract.getRoundData(...)
  // - contract.getTimestamp(...)
  // - contract.hasAccess(...)
  // - contract.latestAnswer(...)
  // - contract.latestConfigDetails(...)
  // - contract.latestRound(...)
  // - contract.latestRoundData(...)
  // - contract.latestTimestamp(...)
  // - contract.latestTransmissionDetails(...)
  // - contract.linkAvailableForPayment(...)
  // - contract.maxAnswer(...)
  // - contract.minAnswer(...)
  // - contract.oracleObservationCount(...)
  // - contract.owedPayment(...)
  // - contract.owner(...)
  // - contract.requestNewRound(...)
  // - contract.requesterAccessController(...)
  // - contract.transmitters(...)
  // - contract.validator(...)
  // - contract.version(...)
}

export function handleAnswerUpdated(event: AnswerUpdated): void {}

export function handleBillingAccessControllerSet(
  event: BillingAccessControllerSet
): void {}

export function handleBillingSet(event: BillingSet): void {}

export function handleCheckAccessDisabled(event: CheckAccessDisabled): void {}

export function handleCheckAccessEnabled(event: CheckAccessEnabled): void {}

export function handleConfigSet(event: ConfigSet): void {}

export function handleNewRound(event: NewRound): void {}

export function handleNewTransmission(event: NewTransmission): void {}

export function handleOraclePaid(event: OraclePaid): void {}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequested
): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePayeeshipTransferRequested(
  event: PayeeshipTransferRequested
): void {}

export function handlePayeeshipTransferred(event: PayeeshipTransferred): void {}

export function handleRemovedAccess(event: RemovedAccess): void {}

export function handleRequesterAccessControllerSet(
  event: RequesterAccessControllerSet
): void {}

export function handleRoundRequested(event: RoundRequested): void {}

export function handleValidatorUpdated(event: ValidatorUpdated): void {}
