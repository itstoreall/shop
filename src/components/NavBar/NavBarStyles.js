import { createUseStyles } from 'react-jss';

export default createUseStyles({
  NavBar: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid teal',
    // height: '100%',
    // listStyle: 'none',
    // margin: 0,
    // padding: 10,
    // minWidth: 130,
    width: 180,
    overflow: 'auto',
  },

  link: {
    // backgroundColor: 'inherit',
    // textDecoration: 'none',
    padding: '15px 20px',
    color: 'teal',

    '&:not(:last-child)': {
      borderBottom: '1px solid teal',
    },

    '&:hover': {
      color: '#fff',
      backgroundColor: 'teal',
    },
  },

  activeLink: {
    backgroundColor: 'tomato',
    color: '#f1f1f1',

    '&:hover': {
      color: '#fff',
      backgroundColor: 'tomato',
    },
  },
});
