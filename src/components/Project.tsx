import React from "react";
import { Link } from "react-router-dom";
// Replace these with your actual image imports
import ikeaRobotImage from '../assets/images/ikea_inventory.jpg'; // Image of you with the IKEA robot
import dashboardImage from '../assets/images/ikea_dashboard.png'; // Image of you with the IKEA robot
import texasAMCarImage from '../assets/images/tamu_car.jpg'; // SAE Autonomous car image
import teachingImage from '../assets/images/irb_assignment.png'; // Screenshot of assignment/classroom
import '../assets/styles/Project.scss';

function Project() {
    return(
        <div className="projects-container" id="projects">
            <h1>Featured Projects</h1>
            
            <div className="blog-content">
                <p className="intro">
                    These are just a few highlights from my experience in robotics. 
                    <Link to="/projects" className="view-all-link">View all my projects →</Link>
                </p>

                <div className="project-story">
                    <h3>Autonomous Inventory Robot for IKEA - (2025)</h3>
                    
                    <div className="image-embed float-right ikea-image">
                        <img src={ikeaRobotImage} alt="Me and the IKEA inventory robot in Sweden" className="story-image" />
                        <p className="image-caption">Deployment testing at IKEA warehouse facility in Malmö, Sweden</p>
                    </div>
                    
                    <p>
                        I worked on developing an autonomous RFID-based inventory scanning robot for IKEA warehouses 
                        at Oddness Technologies. The project started with an existing robotic base that needed significant 
                        rework across both hardware and software systems. Over the course of nearly a year, the system 
                        evolved from a basic proof-of-concept demonstration in Santiago to full deployment testing in 
                        Sweden.
                    </p>

                    <br></br>
                    
                    <p>
                        The technical work involved developing custom firmware in ROS2 and building the complete navigation 
                        stack in Nav2, including custom C++ plugins specifically designed for warehouse pathfinding. 
                        Integration work included RFID antenna arrays, computer vision systems for product detection, 
                        sensor fusion, motor control logic, and electronics. A Gazebo simulation environment was also 
                        created to model the Swedish warehouse before deployment.
                    </p>
                    
                    <br></br>

                    <div className="image-embed float-left dashboard-image">
                        <img src={dashboardImage} alt="Custom robot control dashboard" className="story-image" />
                        <p className="image-caption">React-based control dashboard for robot operations</p>
                    </div>
                    
                    <p>
                        Beyond the robot hardware, the project required developing control and monitoring systems, 
                        including a dashboard in React for real-time robot operations, route planning interfaces, and 
                        inventory data visualization. This work spanned from low-level firmware and motor control 
                        to user-facing web interfaces for warehouse operators.
                    </p>

                    <br></br>
                    
                    <p>
                        The project culminated in two months of testing in live IKEA warehouse conditions in Malmö, 
                        working directly with their logistics teams to validate autonomous navigation, inventory 
                        scanning accuracy, and integration with existing warehouse systems.
                    </p>
                    <br/>
                </div>

                <div className="project-story">
                    <h3>Associate Professor at PUC Chile - (2024-Present)</h3>
                    
                    <div className="image-embed float-right">
                        <img src={teachingImage} alt="PUC robotics course assignment" className="story-image" />
                        <p className="image-caption">Interactive assignment from Fundamentals of Robotic Systems</p>
                    </div>
                    
                    <p>
                        I was appointed as Associate Professor at PUC Chile at the end of 2023, building on extensive 
                        experience as a teaching assistant and involvement in faculty robotics projects. I currently 
                        teach IRB1010 (Introduction to Robotic Systems) and IRB2001 (Fundamentals of Robotic Systems), 
                        covering the complete spectrum of foundational robotics education for engineering students.
                    </p>
                    
                    <br></br>

                    <p>
                        My curriculum focuses on robot cognition, emphasizing the technical fundamentals of perception, 
                        planning, and navigation systems. Course content includes practical assignments on sensor fusion 
                        algorithms, planning and search methodologies, configuration space decomposition, Bayesian 
                        filtering techniques, and camera transformation mathematics. Students implement these concepts 
                        through hands-on projects that bridge theoretical understanding with practical robotics applications.
                    </p>

                    <br></br>
                    
                    <p>
                        The courses culminate in students coding their own football-playing robots, combining all the 
                        perception, planning, and navigation concepts into a complete autonomous system. Teaching has 
                        been a long-held dream of mine, and this experience has reinforced my passion for education 
                        and my goal of pursuing a faculty career in robotics and autonomous systems.
                    </p>
                    <br/>
                </div>

                <div className="project-story">
                    <h3>SAE AutoDrive Challenge - (2024)</h3>
                    
                    <p>
                        I contributed to Texas A&M's AutoDrive team "the 12th unmanned" during my research internship 
                        in Dr. Swaroop Darbha's laboratory, where we achieved 2nd place overall in the SAE AutoDrive 
                        Challenge. A General Motors sponsored competition that challenges university 
                        teams to develop Level 4 autonomous vehicles capable of handling complex real-world driving 
                        scenarios.
                    </p>

                    <br></br>

                    <div className="image-embed float-left">
                        <img src={texasAMCarImage} alt="Autonomous vehicle at SAE competition" className="story-image" />
                        <p className="image-caption">Texas A&M's autonomous vehicle during AutoDrive Challenge testing</p>
                    </div>
                    
                    <p>
                        My work focused on perception and planning algorithms, developing systems for real-time sensor 
                        data processing and autonomous navigation decision-making in ROS2. The technical implementation involved 
                        extensive sensor fusion combining LiDAR, cameras, and GPS to create comprehensive environmental 
                        understanding. Key capabilities included intersection navigation, traffic light recognition, 
                        lane change maneuvers, and dynamic obstacle avoidance.
                    </p>
                    
                    <br></br>
                    
                    <p>
                        The team successfully demonstrated autonomous navigation in challenging scenarios, including intersection turns, blocked lane avoidance, pedestrian detection, and traffic rule compliance. Testing wrapped up at MCity, Michigan, where our vehicle completed all planned maneuvers, including complex intersection handling and real-time route planning, earning us the 2nd place in the competition.
                    </p>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default Project;