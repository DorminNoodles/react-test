import { useDrop } from 'react-dnd'

function myDropTarget(props) {
  const [collectedProps, drop] = useDrop({
    accept,
  })

  return <div ref={drop}>Drop Target</div>
}
