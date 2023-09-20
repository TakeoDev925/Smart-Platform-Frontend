import Stylesheet from 'reactjs-stylesheet'

const styles = Stylesheet.create({
  layout: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0
  },
  topBgImage: {
    width: '100%',
    height: '60px',
    position: 'absolute',
    top: 0,
    left: 0
  },
  title: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 12,
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 0
  }
})
export default styles
