/* eslint-env node, mocha */
import {expect} from 'chai'
import aggregateStatistics from '../src/statistics/aggregate'

describe('statistics > aggregate', () => {
  it('can calculate total auras count', () => {
    expect(aggregateStatistics({}).totalAuras).to.equal(null)
    expect(aggregateStatistics({nightfury: 1}).totalAuras).to.equal(null)
    expect(aggregateStatistics({
      chakEggSacks: 1,
      preservedQueenBees: 5,
      ghostlyInfusions: 2,
      baubleInfusions: 3,
      luminescentRefractors: 0,
      wintersPresence: 1,
      nightfury: 0,
      wintersHeartInfusions: 3,
      kodasWarmthEnrichment: 1,
      phospholuminescentInfusions: 2
    }).totalAuras).to.equal(18)
  })
})
