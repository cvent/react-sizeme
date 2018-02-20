import createResizeDetector from 'element-resize-detector'

let scrollInstance
let objectInstance

// Lazily require to not cause bug
// https://github.com/ctrlplusb/react-sizeme/issues/6
function resizeDetector(strategy = 'scroll') {
  if (strategy === 'scroll') {
    if (scrollInstance) return scrollInstance
    scrollInstance = createResizeDetector({
      strategy,
    })
    return scrollInstance
  }

  if (strategy === 'object') {
    if (objectInstance) return objectInstance
    objectInstance = createResizeDetector({
      strategy,
    })
    return objectInstance
  }
}

export default resizeDetector
