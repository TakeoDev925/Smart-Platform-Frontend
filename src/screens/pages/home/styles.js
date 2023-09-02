import Stylesheet from "reactjs-stylesheet";
import background from "../../../assets/png/bg.png";

const styles = Stylesheet.create({
	layout: {
    display: "flex",
    width: '100%',
    height: "100%",
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
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
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;


