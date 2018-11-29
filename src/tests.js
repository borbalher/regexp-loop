const
assert     = require('chai').assert,
regexLoop  = require('.')


describe('RegexLoop tests', () =>
{
  it('should get 3 matches with the specified string', () =>
  {
    const
    regexp    = /donec/gi,
    string    = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id varius nisi. Nunc congue bibendum leo condimentum egestas. Donec fringilla volutpat urna, ut facilisis tellus luctus sit amet. Donec bibendum eget dui sed eleifend. Ut venenatis aliquam enim, vel malesuada sapien aliquam eget. Suspendisse interdum euismod dolor, ac pretium diam vehicula eu. Maecenas condimentum orci sodales mi pharetra, sit amet sagittis leo imperdiet. Vestibulum et tempus dolor, quis vehicula nisi. Donec consequat velit cursus, vehicula leo blandit, sagittis massa. Suspendisse tristique dolor lectus, eu finibus ligula tempus vel. Vivamus blandit, purus et dictum tristique, lacus nibh suscipit lacus, vel egestas justo orci et ligula. Aliquam sapien velit, posuere placerat commodo ac, euismod vel quam.`,
    matches   = [],
    callback  = (match) =>
    {
      matches.push(match)
    }

    regexLoop(regexp, string, callback)

    assert(matches.length === 3)
  })

  it('should get 4 matches with the specified string (zero-length matches)', () =>
  {
    const
    regexp    = /\b/gi,
    string    = `1,2`,
    matches   = [],
    callback  = (match) =>
    {
      matches.push(match)
    }

    regexLoop(regexp, string, callback)

    assert(matches.length === 4)
  })
})
