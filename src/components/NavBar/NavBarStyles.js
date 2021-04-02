import { createUseStyles } from 'react-jss';

export default createUseStyles({
  NavBar: {
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    width: 140,
    borderRight: '1px solid #f2f2f2',
  },

  // Link
  link: {
    padding: 20,
    color: 'grey',
    fontWeight: 500,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    border: '3px solid #fff',
    borderBottom: 'none',

    '&:first-child': {
      borderTop: 'none',
    },

    '&:hover': {
      color: '#fff',
      backgroundColor: '#979fcb',
    },
  },

  // Active Link
  activeLink: {
    color: '#fff',
    backgroundColor: '#957aa4',

    '&:hover': {
      color: '#fff',
      backgroundColor: '#957aa4',
    },
  },
});
