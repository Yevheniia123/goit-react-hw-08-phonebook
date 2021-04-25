import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import defaultAvatar from './avatar.png';
import authOperation from '../../redux/auth/auth-operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});
const mapDispatchToProps = {
  onLogout: authOperation.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
