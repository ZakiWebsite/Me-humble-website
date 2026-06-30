"use client";
import React from 'react';

// Hardcoded data for the 2026 World Cup Group Stages
const scorers = [
  { name: "Riyad Mahrez", goals: 2 },
  { name: "Nadhir Benbouali", goals: 1 },
  { name: "Amine Gouiri", goals: 1 }
];

export default function AlgeriaScorers() {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Algeria's Top Goalscorers - 2026 World Cup</h2>
      
      <div style={styles.grid}>
        {scorers.map((player, index) => (
          <div key={index} style={styles.card} className="scorer-card">
            <div style={styles.rank}>#{index + 1}</div>
            <h3 style={styles.name}>{player.name}</h3>
            <p style={styles.goals}>
              {player.goals} Goal{player.goals !== 1 ? 's' : ''}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Inline Styles
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
  },
  title: {
    color: '#006233',
    marginBottom: '30px',
    fontSize: '24px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '25px',
    width: '200px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  rank: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#d21034',
    marginBottom: '10px',
  },
  name: {
    fontSize: '20px',
    color: '#333333',
    margin: '10px 0',
  },
  goals: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#006233',
    margin: 0,
  }
};