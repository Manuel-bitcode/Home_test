import { createUseStyles } from 'react-jss'
// fontFamily:'Raleway, sans-serif',

const useStyles = createUseStyles({
  containerPost: {
    width: '100%',
    margin: 0,
    marginBottom: '60px'
  },
  containerBody: {
    padding: '30px 25px 30px 25px',
    border: ' 1px solid transparent',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  bodyFont: {
    fontWeight: 500,
    fontSize: 18,
    lineHeight: '150%'
  },
  authorFont: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '150%',
    color: '#6424FF',
    margin: 0,
    marginTop: 10
  },
  datePostFont: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '150%',
    marginTop: '10px',
    color: 'white'
  }
})

export default useStyles