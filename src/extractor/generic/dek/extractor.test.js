import assert from 'assert'
import cheerio from 'cheerio'

// import HTML from './fixtures/html'
import GenericDekExtractor from './extractor'

describe('GenericDekExtractor', () => {
  describe('extract($, cachedMeta)', () => {

    it('returns null if no dek can be found', () => {
      const $ = cheerio.load('<div></div>')
      const cachedMeta = []
      const result =
        GenericDekExtractor.extract($, cachedMeta)

      assert.equal(result, null)
    })

  })
})