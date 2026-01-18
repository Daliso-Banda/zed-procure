import React, { useState } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Your fetch logic to /api/login goes here
    console.log("Attempting login for:", email);
  };

  return (
    <div style={styles.page}>
      <div style={styles.contentWrapper}>
        {/* Left Side: Branding (FB Style) */}
        <div style={styles.brandSide}>
          <h1 style={styles.logoText}>Gentleman's</h1>
          <p style={styles.subText}>
            Admin   </p>
        </div>

        {/* Right Side: Login Card */}
        <div style={styles.loginSide}>
          <div style={styles.card}>
            <form onSubmit={handleLogin}>
              <input
                style={styles.input}
                type="text"
                placeholder="Email or Username"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                style={styles.input}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" style={styles.loginBtn}>
                Log In
              </button>
            </form>
            <div style={styles.divider} />
            <button style={styles.forgotBtn}>Forgot password?</button>
          </div>
          <p style={styles.footerText}>
            <b>Access Restricted</b> to authorized personnel only.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#f0f2f5', // FB Light Grey background
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  contentWrapper: {
    display: 'flex',
    width: '980px',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '100px',
  },
  brandSide: {
    width: '500px',
    paddingRight: '32px',
  },
  logoText: {
    color: '#c5a059', // Gentleman Gold
    fontSize: '50px',
    fontWeight: 'bold',
    margin: '0',
    letterSpacing: '-1px',
  },
  subText: {
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: 'normal',
    color: '#1c1e21',
    marginTop: '10px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)',
    width: '396px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: '50px',
    fontSize: '17px',
    padding: '14px 16px',
    marginBottom: '12px',
    border: '1px solid #dddfe2',
    borderRadius: '6px',
    boxSizing: 'border-box',
    outline: 'none',
  },
  loginBtn: {
    width: '100%',
    height: '48px',
    backgroundColor: '#1a1a1a', // Dark theme button
    color: '#c5a059',
    fontSize: '20px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '6px',
  },
  divider: {
    borderBottom: '1px solid #dadde1',
    margin: '20px 0',
  },
  forgotBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1a1a1a',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  footerText: {
    marginTop: '28px',
    fontSize: '14px',
    textAlign: 'center',
  }
};

export default AdminLogin;