import { createUseStyles } from 'react-jss';

export default createUseStyles({
  NavBar: {
    display: 'flex',
    flexDirection: 'column',
    width: 140,
    borderRight: '1px solid #f2f2f2',
    overflow: 'auto',
  },

  link: {
    padding: 20,
    color: 'grey',
    fontWeight: 500,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    border: '3px solid #fff',
    borderBottom: 'none',

    '&:hover': {
      color: '#fff',
      backgroundColor: 'teal',
    },
  },

  activeLink: {
    backgroundColor: 'tomato',
    color: '#fff',

    '&:hover': {
      backgroundColor: 'tomato',
    },
  },
});
