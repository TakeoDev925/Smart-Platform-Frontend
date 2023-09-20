import Stylesheet from 'reactjs-stylesheet'

const styles = Stylesheet.create({
  layout: {
    display: 'flex',
    width: '100%',
    height: 500,
    border: '1px solid #054671',
    objectFit: 'fill',
    overflow: 'hidden',
    backgroundColor: 'white',
    position: 'relative',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    zIndex: 1000
  },
  cameraImage: {
    display: 'flex',
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
  },
  closeBtn: {
    display:'flex',
    position: 'absolute',
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 9999,
    backgroundColor: '#054671',
    zIndex: 1001
  }
})
export default styles
