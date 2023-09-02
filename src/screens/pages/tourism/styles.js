import Stylesheet from "reactjs-stylesheet";
import background from "../../../assets/png/bg.png";

const styles = Stylesheet.create({
	layout: {
    display: "flex",
    flexDirection: "column",
    width: '100%',
    height: "100%",
    minHeight: '100vh',
    alignItems: 'center',
    backgroundColor: 'red',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
	},
	topBgImage: {
    width: '100%',
    height: '60px',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 12,
    color: 'white',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    zIndex: 1,
  },
  menuTabView: {
    display: 'flex',
    flexDirection: 'row',
    width: '30%',
    paddingLeft: 60,
    paddingRight: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedTabView: {
    color: '#f29701',
    fontSize: 16,
    fontWeight: 600,
    opacity: 100,
  },
  unSelectedTabView: {
    color: 'white',
    fontSize: 16,
    opacity: 30,
  },
  mainVie: {
    display: 'flex',
    width: '100%',
    marginTop: 12,
  }
});
export default styles;
