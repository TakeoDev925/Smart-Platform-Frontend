import Stylesheet from "reactjs-stylesheet";

const styles = Stylesheet.create({
	layout: {
    // width: '100%',
    height: 300,
    display: 'flex',
    maxHeight: 400,
    border: '1px solid #054671', 
    overflow: 'hidden',
    backgroundColor: '#054671',
    position: 'relative',
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 1000,
	},
	topBgImage: {
    width: '100%',
    height: '60px',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  name: {
    position: 'absolute',
    left: 50,
    top: -5,
    borderRadius: 10,
    borderLeft: '1px solid #054671',
    borderRight: '1px solid #054671',
    borderBottom: '1px solid #054671', 
    padding: 10,
    width: 240,
    textAlign: 'center',
    backgroundColor: '#e4ffe5',
    color: '#f29701',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
    marginTop: 5,
  },
});
export default styles;
