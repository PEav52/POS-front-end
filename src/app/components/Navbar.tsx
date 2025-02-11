"use client";

import React from 'react';
import { FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa'; // For icons
import { cursorTo } from 'readline';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>

        {/* Company Name */}
        <a style={styles.brand} href="#">KHCode</a>

        {/* Search Box */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>Search</button>
        </div>

        {/* Right-side icons and User Profile */}
        <div style={styles.rightSection}>
          {/* Message Icon */}
          <a href="#" style={styles.iconLink}>
            <FaEnvelope size={20} style={styles.icon} />
          </a>
          
          {/* Bell Icon */}
          <a href="#" style={styles.iconLink}>
            <FaBell size={20} style={styles.icon} />
          </a>
          
          {/* User Profile with Name */}
          <div style={styles.userProfile}>
            <FaUserCircle size={30} style={styles.userIcon} />
            <span style={styles.username}>John Doe</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#9EEEA6',
    padding: '0.5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center',
  },
  brand: {
    color: '#000',
    fontSize: '1.5rem',
    textDecoration: 'none',
    fontWeight: "bold",
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'center',
  },
  searchInput: {
    width: '80%',
    padding: '0.375rem 0.75rem',
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
  },
  searchButton: {
    backgroundColor: '#0d6efd',
    color: '#fff',
    padding: '0.375rem 0.75rem',
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    marginLeft: '0.5rem',
    cursor: "pointer",
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  iconLink: {
    marginRight: '2rem',
    color: '#000',
  },
  icon: {
    cursor: 'pointer',
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
  },
  userIcon: {
    marginRight: '1rem',
    color: '#000',
  },
  username: {
    color: '#000',
    fontSize: '1rem',
  },
};

export default Navbar;
