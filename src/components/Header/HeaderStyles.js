import { createUseStyles } from 'react-jss';

export default createUseStyles({
  Header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    color: 'white',
    backgroundColor: '#6a7cb2',
    borderBottom: '3px solid #fff',
  },

  logo: {
    display: 'block',
    fontSize: 18,
    fontWeight: 600,
  },

  tel: {
    display: 'block',
  },
});
