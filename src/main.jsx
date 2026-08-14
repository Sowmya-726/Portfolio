import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const toolkit = {
  "LANGUAGES": [
    ["Python", "90%"],
    ["SQL", "88%"],
    ["Java", "75%"],
    ["JavaScript", "65%"],
  ],

  "DATA & ANALYTICS": [
    ["Power BI", "90%"],
    ["MS Excel", "88%"],
    ["Pandas", "85%"],
    ["NumPy", "82%"],
    ["DAX", "75%"],
    ["Data Visualization", "88%"],
  ],

  "ML & AI": [
    ["Machine Learning", "82%"],
    ["TensorFlow / Keras", "72%"],
    ["NLP", "70%"],
  ],

  "DATABASES & TOOLS": [
    ["MySQL", "82%"],
    ["MongoDB", "70%"],
    ["Git & GitHub", "85%"],
  ],
};

const analyticsProjects = [
  {
    no: "01",
    title: "Sales Performance Dashboard",
    type: "POWER BI",
    description:
      "Developed a comprehensive sales performance dashboard using Power BI to visualize key metrics, track sales trends, and provide actionable insights for decision-making. Implemented DAX measures and Power Query transformations to clean and model data from multiple sources, enabling dynamic reporting and interactive visualizations.",
    tags: ["Power BI", "DAX", "Power Query"],
  },
  {
    no: "02",
    title: "SQL Data Warehouse & ETL Pipeline",
    type: "SQL Server",
    description:
      "Designed and implemented a SQL Server data warehouse with an ETL pipeline to extract, transform, and load data from multiple sources into a centralized repository for reporting and analytics.Optimized database performance through indexing, partitioning, and query optimization techniques while ensuring data integrity and consistency across the warehouse.",
    tags: ["SQL", "ETL", "Data Warehouse"],
  },
  {
    no: "03",
    title: "Business Analytics Dashboard",
    type: "POWER BI",
    description:
      "Created an interactive business analytics dashboard in Power BI to monitor key performance indicators (KPIs) and track business metrics across various departments. Utilized DAX calculations and advanced visualizations to provide insights into sales, marketing, and operational performance, enabling data-driven decision-making for stakeholders.",
    tags: ["Power BI", "DAX", "Business"],
  },
];

const mlProjects = [
  {
    no: "04",
    title: "Multi-Domain Churn Prediction",
    type: "MACHINE LEARNING",
    description:
      "Developed a multi-domain churn prediction model using machine learning techniques to identify potential customer churn across various industries. Implemented feature engineering, data preprocessing, and model selection to improve prediction accuracy, enabling businesses to proactively retain customers and optimize marketing strategies.",
    tags: ["Python", "ANN", "Keras"],
  },
  {
    no: "05",
    title: "Safe Street",
    type: "AI / ML",
    description:
      "Built an AI-powered street safety application that leverages machine learning algorithms to detect and analyze potential hazards on streets. Implemented object detection models to identify vehicles, pedestrians, and obstacles in real-time, providing users with alerts and recommendations for safer navigation.",
    tags: ["Python", "ViT", "ML"],
  },
];

const certifications = [
  ["Python Essentials 1", "Cisco Networking Academy", "🐍"],
  ["Data Analytics Virtual Experience", "Deloitte", "◈"],
  ["Introduction to Data Science", "Cisco Networking Academy", "▣"],
  ["📊Python Libraries: Pandas & NumPy Kaggle", "Kaggle", "▣"],
  ["Python Essentials 2", "Cisco Networking Academy", "🐍"],
];

function SkillGroup({ title, items }) {
  return (
    <div className="skill-group">
      <div className="skill-group-title">
        <span className="tiny-square"></span>
        {title}
      </div>

      <div className="skills-grid">
        {items.map(([name, level]) => (
          <div className="skill-item" key={name}>
            <div className="skill-name">
              <span>{name}</span>
              <small>{level}</small>
            </div>

            <div className="skill-progress">
              <span style={{ width: level }}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">{project.no}</span>
        <span className="project-type">{project.type}</span>
      </div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="project-arrow">↗</div>
    </article>
  );
}

function App() {
  return (
    <main>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="grid-glow"></div>
          <div className="hero-orb"></div>
          <div className="hero-lines"></div>
        </div>

        <div className="hero-content">
          <div className="hero-label">
            DATA ANALYST • DATA SCIENCE 
          </div>
          <div className="hero-navigation">
  <a href="#about">ABOUT</a>
  <a href="#skills">SKILLS</a>
  <a href="#projects">PROJECTS</a>
  <a href="#education">EDUCATION</a>
  <a href="#activities">ACTIVITIES</a>
  <a href="#contact">CONTACT</a>
</div>

          <h1>
            SOWMYA
            <br />
            <span>REDDY</span>
          </h1>

          <p className="hero-description">
            Computer Science undergraduate specializing in Data Science,
            passionate about data analytics, business intelligence,
            machine learning and solving real-world problems with data.
          </p>

          <div className="hero-meta">
            <span>HYDERABAD, INDIA</span>
            <span>OPEN TO OPPORTUNITIES</span>
          </div>
        </div>

      </section>


      {/* ABOUT */}
      <section className="section about-section" id="about">

        <div className="section-heading">
          <span>01 — ABOUT ME</span>
          <div></div>
        </div>

        <div className="about-layout">

          <div className="about-left">

            <div className="about-title">
              <h2>
                Turning
                <br />
                data into
                <br />
                <em>meaningful insights.</em>
              </h2>
            </div>

            <div className="about-content">

              <p>
                I'm Sowmya Reddy Gouraram, a Computer Science student
                specializing in Data Science with a strong interest in
                Data Analytics, Business Intelligence and Machine Learning.
              </p>

              <p>
                I enjoy working with data to discover patterns, build
                dashboards, solve business problems and create practical
                machine learning solutions.
              </p>

              <p>
                My goal is to combine analytical thinking and technical
                skills to turn complex data into clear and useful decisions.
              </p>

              <div className="mini-info">
                <span>PYTHON</span>
                <span>SQL</span>
                <span>POWER BI</span>
                <span>MACHINE LEARNING</span>
              </div>

            </div>
          </div>


          <div className="stats">

            <div className="stat">
              <strong>9.23</strong>
              <span>CGPA / 10</span>
            </div>

            <div className="stat">
              <strong>2+</strong>
              <span>DATA PROJECTS</span>
            </div>

            <div className="stat">
              <strong>2+</strong>
              <span>ML PROJECTS</span>
            </div>

            <div className="stat">
              <strong>10.0</strong>
              <span>SSC CGPA</span>
            </div>

          </div>

        </div>
      </section>


      {/* SKILLS */}
      <section className="section" id="skills">

        <div className="section-heading">
          <span>02 — TECHNICAL SKILLS</span>
          <div></div>
        </div>

        <h2 className="section-title">
          My <em>Toolkit.</em>
        </h2>

        <div className="toolkit">

          {Object.entries(toolkit).map(([title, items]) => (
            <SkillGroup
              key={title}
              title={title}
              items={items}
            />
          ))}

        </div>
      </section>


      {/* PROJECTS */}
      <section className="section" id="projects">

        <div className="section-heading">
          <span>03 — PROJECTS</span>
          <div></div>
        </div>

        <h2 className="section-title">
          Selected <em>Work.</em>
        </h2>


        <div className="project-category-heading">
      
        </div>

        <div className="projects-grid">
          {analyticsProjects.map((project) => (
            <ProjectCard
              project={project}
              key={project.no}
            />
          ))}
        </div>


        <div className="project-category-heading second">
          <span>◆</span>
          MACHINE LEARNING
        </div>

        <div className="projects-grid ml-grid">
          {mlProjects.map((project) => (
            <ProjectCard
              project={project}
              key={project.no}
            />
          ))}
        </div>

      </section>


      {/* EDUCATION */}
      <section className="section" id="education">

        <div className="section-heading">
          <span>04 — EDUCATION</span>
          <div></div>
        </div>

        <h2 className="section-title">
          My <em>Journey.</em>
        </h2>

        <div className="timeline">

          <div className="timeline-line"></div>


          <div className="journey-item">

            <div className="timeline-dot"></div>

            <div className="journey-card">

              <div>
                <small>2023 — PRESENT</small>

                <h3>
                  B.Tech — Computer Science & Engineering
                  <br />
                  <span>Data Science</span>
                </h3>

                <p>
                  ACE Engineering College
                </p>

                <div className="journey-tags">
                  <span>CSE</span>
                  <span>DATA SCIENCE</span>
                  <span>UNDERGRADUATE</span>
                </div>
              </div>

              <div className="score-box">
                <strong>9.23</strong>
                <span>/ 10 CGPA</span>
              </div>

            </div>
          </div>


          <div className="journey-item">

            <div className="timeline-dot"></div>

            <div className="journey-card">

              <div>
                <small>2021 — 2023</small>

                <h3>
                  Intermediate — MPC
                </h3>

                <p>
                  Higher Secondary Education
                </p>

                <div className="journey-tags">
                  <span>MPC</span>
                  <span>MATHEMATICS</span>
                  <span>SCIENCE</span>
                </div>
              </div>

              <div className="score-box">
                <strong>97%</strong>
                <span>MARKS</span>
              </div>

            </div>
          </div>


          <div className="journey-item">

            <div className="timeline-dot"></div>

            <div className="journey-card">

              <div>
                <small>2020 — 2021</small>

                <h3>
                  SSC — 10th Grade
                </h3>

                <p>
                  Secondary School Education
                </p>

                <div className="journey-tags">
                  <span>SSC</span>
                  <span>10TH GRADE</span>
                </div>
              </div>

              <div className="score-box">
                <strong>10.0</strong>
                <span>/ 10 CGPA</span>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* CERTIFICATIONS */}
      <section className="section">

        <div className="section-heading">
          <span>05 — CERTIFICATIONS</span>
          <div></div>
        </div>

        <h2 className="section-title">
          Credentials <em>& Badges.</em>
        </h2>

        <div className="credentials-grid">

          {certifications.map(([name, provider, icon]) => (

            <div className="credential" key={name}>

              <div className="credential-icon">
                {icon}
              </div>

              <div>
                <h3>{name}</h3>
                <p>{provider}</p>
              </div>

              <span className="credential-arrow">
                ↗
              </span>

            </div>

          ))}

        </div>
      </section>

      {/* LEADERSHIP & ACTIVITIES */}
<section className="section" id="activities">
  <div className="section-heading">
    <span>06 — LEADERSHIP & ACTIVITIES</span>
    <div></div>
  </div>

  <h2 className="section-title">
    Beyond <em>Academics.</em>
  </h2>

  <div className="activities-grid">

    {/* TEDx */}
    <div className="activity-card">
      <div className="activity-number">01</div>

      <div className="activity-content">
        <span className="activity-type">
          EVENT MANAGEMENT • MARKETING • ANALYTICAL THINKING
        </span>

        <h3>TEDx ACE Engineering College</h3>

        <h4>Event Management & Marketing Team</h4>

        <p>
          Supported event planning, marketing and audience engagement by
          coordinating with team members, understanding audience requirements,
          promoting event participation and contributing to smooth execution.
          Developed skills in stakeholder coordination, problem-solving,
          communication and data-driven decision making.
        </p>

        <div className="activity-tags">
          <span>STAKEHOLDER COORDINATION</span>
          <span>MARKETING ANALYSIS</span>
          <span>PROBLEM SOLVING</span>
          <span>COMMUNICATION</span>
          <span>TEAMWORK</span>
        </div>
      </div>

      <div className="activity-arrow">↗</div>
    </div>

    {/* ELOQUENCE CLUB */}
    <div className="activity-card">
      <div className="activity-number">02</div>

      <div className="activity-content">
        <span className="activity-type">
          COMMUNICATION • PUBLIC SPEAKING
        </span>

        <h3>Eloquence Club</h3>

        <h4>Member & Anchor</h4>

        <p>
          Actively participated in club activities and anchoring, developing
          communication, public speaking, confidence and audience engagement skills.
        </p>

        <div className="activity-tags">
          <span>PUBLIC SPEAKING</span>
          <span>COMMUNICATION</span>
          <span>ANCHORING</span>
          <span>TEAMWORK</span>
        </div>
      </div>

      <div className="activity-arrow">↗</div>
    </div>

  </div>
</section>


      {/* CONTACT */}
      <section className="section contact" id="contact">

        <div className="section-heading">
          <span>07 — CONTACT</span>
          <div></div>
        </div>

        <h2>
          Let's build something
          <br />
          <em>amazing together.</em>
        </h2>

        <p>
          Open to internships, fresher opportunities and
          collaborative projects in Data Analytics, Data Science,
          Business Intelligence and AI/ML.
        </p>


        <a
          href="mailto:mail2sowmya.g@gmail.com"
          className="email-link"
        >
          mail2sowmya.g@gmail.com
        </a>


        <div className="contact-buttons">

          <a
            href="mailto:mail2sowmya.g@gmail.com"
            className="contact-button"
          >
            EMAIL ↗
          </a>

          <a
            href="https://www.linkedin.com/in/gsowmyareddy/"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            LINKEDIN ↗
          </a>

          <a
            href="https://github.com/Sowmya-726"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            GITHUB ↗
          </a>

        </div>


        <div className="contact-links">

          <a href="mailto:mail2sowmya.g@gmail.com">
            mail2sowmya.g@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/gsowmyareddy/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/gsowmyareddy
          </a>

          <a
            href="https://github.com/Sowmya-726"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Sowmya-726
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <span>
          GOURARAM SOWMYA REDDY
        </span>

        <span>
          DATA • ANALYTICS • AI
        </span>

        <span>
          © 2026
        </span>

      </footer>

    </main>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);