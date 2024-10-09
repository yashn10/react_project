import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Welcome to My React Project</h1>
          <p className="header-subtitle">Created by Hrushikesh Surkar</p>
        </div>
      </header>
      <section className="about-section">
        <div className="container">
          <h2>About This Project</h2>
          <p>
            This project showcases various React components and functionalities.
            Explore different parts of the application to see how React can be
            used to create interactive and dynamic web applications.
          </p>
        </div>
      </section>
   
    </div>
  )
}

export default Home
