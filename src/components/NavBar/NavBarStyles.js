import { createUseStyles } from 'react-jss';

export default createUseStyles({
  NavBar: {
    display: 'flex',
    flexDirection: 'column',
    width: 140,
    borderRight: '1px solid #f2f2f2',
    overflow: 'auto',
  },

  // Логика из компонента NavLink
  link: isActive => ({
    padding: 20,
    color: isActive ? '#fff' : 'grey',
    fontWeight: 500,
    backgroundColor: isActive ? 'tomato' : '#f1f1f1',
    borderRadius: 5,
    border: '3px solid #fff',
    borderBottom: 'none',

    '&:hover': {
      color: '#fff',
      backgroundColor: isActive ? 'tomato' : 'teal',
    },
  }),
});
