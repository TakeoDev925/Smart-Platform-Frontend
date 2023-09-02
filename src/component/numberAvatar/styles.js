import Stylesheet from "reactjs-stylesheet";

const styles = Stylesheet.create({
	layout: {
    display: "flex",
    flexDirection: 'row',
    width: 180,
    alignItems: 'center',
	},
  avatarView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  avatarIconImage: {
    width: 45,
    height: 35,
    objectFit: 'contain',
    position: 'absolute'
  },
  numberAvatarTextView: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },
  numberAvatarTextTitle: {
    display: 'flex',
    color: 'white',
    opacity: 0.5,
    marginTop: 4,
  },
  numberAvatarTextSubView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -4,
  },
  numberAvatarTextSubValue: {
    display: 'flex',
    color: '#61ddb1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  numberAvatarTextSubValue1: {
    display: 'flex',
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
  },
});
export default styles;
