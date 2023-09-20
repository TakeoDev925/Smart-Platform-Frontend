import Stylesheet from 'reactjs-stylesheet'

const styles = Stylesheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  container1: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    width: '41%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
    borderBottom: '1px solid #ff7eed',
    marginLeft: 1,
  },
  container3: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
  },
  itemWrap1: {
    width: '100%',
    marginTop: 18
  },
  itemWrap2: {
    width: '100%',
    marginBottom: 24,
  },
  itemWrap3: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 24,
    alignItems: 'flex-end'
  },
  subTitleWrapView1: {
    display: 'flex',
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 10,
    marginTop: 10,
  },
  subTitleLineWrapView1: {
    display: 'flex',
    flexDirection: 'column',
  },
  subTitleLineWrapLabel1: {
    display: 'flex',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  subTitleLineWrapImage1: {
    width: 90,
    height: 4,
    resizeMode: 'contain'
  },
  subTitleLineWrapImage2: {
    width: 380,
    height: 13,
    marginTop: 12
  },
  subTitleWrapView2: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: 24,
    paddingRight: 80
  },
  subTitleWrapView3: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 24,
    paddingRight: 40,
    marginTop: 20,
  },
  subTitleWrapView4: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 24,
    paddingRight: 40,
  },
  subWeatherLocationLabel: {
    color: 'white',
    textAlign: 'left',
    marginLeft: 120,
    fontSize: 18,
    fontWeight: 800,
    marginTop: 5,
    marginBottom: 5,
  },
  subWeatherCateogryItemView1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subWeatherCateogryItemView2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16
  },
  subWeatherCateogryItemView3: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: 24,
    paddingRight: 40,
    alignItems: 'end',
    marginTop: 20,
  },
  subWeatherCateogryItemView4: {
    display: 'flex',
    flexDirection: 'column',
    width: 470,
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: 'flex-end',
    marginTop: -8
  },
  subWeatherCateogryItemSubView1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 420
  },
  subWeatherCateogryItemSubView2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 420,
    marginTop: 16
  },
  subWeatherCateogryItemSubView3: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 10
  },
  subWeatherCateogryTableItemSubView1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #347eed',
    paddingTop: 8,
    paddingBottom: 8
  },
  subWeatherCateogryTableItemSubView2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 8
  },
  subWeatherCateogryItem1: {
    display: 'flex',
    flexDirection: 'row',
    width: 140,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subWeatherCateogryItem2: {
    display: 'flex',
    flexDirection: 'row',
    width: 140,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 80
  },
  subWeatherCateogryItemWeatherIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  subWeatherCateogryTableItemSubViewTitle1: {
    display: 'flex',
    color: 'white',
    textAlign: 'left'
  },
  subWeatherCateogryTableItemSubViewTitle2: {
    display: 'flex',
    color: 'white',
    widows: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subWeatherCateogryTableItemSubViewTitle3: {
    display: 'flex',
    color: 'white',
    justifyContent: 'center',
    marginRight: 120,
    alignItems: 'center',
  },
  blankSpinLogoLayout: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  infoWrapper: {
    display: 'flex',
    height: '75vh',
    width: '40%',
    position: 'absolute',
    // top: 0,
    // right: 0,
    // width: 450,
    // bottom: 0,
    flexDirection: 'column',
  },
  mapContainer: {
    margin: 18,
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'relative',
    border: '2px solid #347eed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallPercentValueUpText: {
    display: 'flex',
    color: 'red',
    textAlign: 'left',
    fontSize: 12
  },
  smallPercentValueDownText: {
    display: 'flex',
    color: '#02deff',
    textAlign: 'left',
    fontSize: 12
  },
  categoryWrapper: {
    display: 'flex',
    marginBottom: 30,
  },
  categoryItemName: {
    display: 'flex',
    padding: 10,
    width: '100%',
    borderBottom: '1px solid #347eed',
    fontSize: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'green'
  },
  categoryChartWrapperView: {
    width: 400,
    height: 200,
    marginTop: 20,
  },
})
export default styles
