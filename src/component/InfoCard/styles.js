import Stylesheet from 'reactjs-stylesheet'

const styles = Stylesheet.create({
  layout: {
    display: 'flex',
    border: '1px solid #054671',
    overflow: 'hidden',
    backgroundColor: '#0b3e77',
    position: 'relative',
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    zIndex: 1000
  },
  topBgImage: {
    width: '100%',
    height: '60px',
    position: 'absolute',
    top: 0,
    left: 0
  },
  name: {
    position: 'absolute',
    left: '25%',
    top: 0,
    borderRadius: 10,
    borderLeft: '1px solid #054671',
    borderRight: '1px solid #054671',
    borderBottom: '1px solid #054671',
    padding: 10,
    width: '50%',
    textAlign: 'center',
    backgroundColor: '#e4ffe5',
    color: '#f29701',
    fontSize: 18 ,
    fontWeight: 600
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  numberText: {
    fontSize: 18,
    fontWeight: 800,
    marginBottom: 10,
    color: 'white',
    textAlign: 'left',
    marginTop: 20,
    paddingBottom: 10,
    borderBottom: '2px dashed gray'
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
    marginTop: 5,
    textAlign: 'left',
  }
})
export default styles
