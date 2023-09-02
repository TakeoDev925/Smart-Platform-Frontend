import Stylesheet from 'reactjs-stylesheet'

const styles = Stylesheet.create({
  layout: {
    display: 'flex',
    width: '100%',
    height: 250,
    border: '1px solid #054671',
    overflow: 'hidden',
    backgroundColor: 'white',
    position: 'relative',
    zIndex: 1000
  },
  cameraImage: {
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    objectFit: 'fill'
  },
  cameraName: {
    display: 'flex',
    color: 'white',
    marginTop: 4
  },
  cameraView: {
    display: 'flex',
    overflow: 'auto',
    position: 'absolute',
    top: 36,
    right: 10,
    height: 250
  },
  cameraSubView: {
    display: 'flex',
    backgroundColor: '#438be9',
    marginRight: 5,
    cursor: 'pointer',
    marginBottom: 10
  }
})
export default styles
