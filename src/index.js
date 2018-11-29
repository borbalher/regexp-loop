/**
 * It executes the sepecified regexp for the given text and executes the callback with the match. If a global regexp is used, it creates a loop.
 * @param {RegExp} regexp - Regular expression
 * @param {string} text - Text
 * @param {function} cb - Callback function
 */
function regexLoop(regexp, text, cb)
{
  let match

  while((match = regexp.exec(text)) !== null)
  {
    // This is necessary to avoid infinite loops with zero-width matches
    if(match.index === regexp.lastIndex)
      regexp.lastIndex++

    cb(match)
  }
}

module.exports = regexLoop
