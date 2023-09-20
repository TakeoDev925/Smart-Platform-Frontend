import Stylesheet from 'reactjs-stylesheet'

const styles = Stylesheet.create({
  layout: {
    display: 'flex',
    width: 500,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapImage: {
    width: 400,
    height: 400,
    contain: 'content',
    position: 'absolute'
  }
})

export default styles
