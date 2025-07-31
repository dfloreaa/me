import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/AllProjects.scss';
import ikeaRobot from '../assets/images/ikea_horizontal.jpg';
import tamuCar from '../assets/images/tamu_lab.jpg';
import tspGIF from '../assets/images/tsp.gif';
import tspCrown from '../assets/images/tsp_crown_6500.jpg';
import jlgGIF from '../assets/images/jlg.gif';
import jlgMSP from '../assets/images/jlg_10msp.jpg';
import caleuche from '../assets/images/caleuche.jpg';
import capstoneGIF from '../assets/images/scara_arm.gif';

function AllProjects() {
    return(
        <div className="projects-container" id="all-projects">
            <div className="back-link">
                <Link to="/" className="back-to-home">← Back to Home</Link>
            </div>
            
            <h1>All Projects</h1>
            
            <div className="blog-content">
                <p className="intro">
                    Here's a comprehensive look at my robotics projects, research work, and contributions 
                    to autonomous systems development.
                </p>

                <div className="project-story">
                    <h3>Autonomous Inventory Robot for IKEA - (2025)</h3>
                    
                    <div className="project-images">
                        <div className="image-group single-image">
                            <img src={ikeaRobot} alt="Custom robot control dashboard" className="project-image" />
                        </div>
                        <p className="image-caption">Robot at the IKEA warehouse in Malmö, Sweden</p>
                    </div>

                    <div className="project-content">
                        <p>
                            I worked on developing an inventory scanning robot for IKEA warehouse environments. Being involved in most of the development, including the embedded control logic, integration of RFID and vision sensors, and building the navigation stack. Alongside the robotics work, I created a custom React dashboard that allowed warehouse teams to monitor the robot in real time, visualize inventory data, and manage route planning.
                        </p>
                    </div>
                </div>

                <div className="project-story">
                    <h3>Associate Professor at PUC Chile - (2024-Present)</h3>
                    
                    <div className="project-content">
                        <p>
                            I teach IRB1010 (Introduction to Robotic Systems) and IRB2001 (Fundamentals of Robotic Systems), focusing on robot cognition and the technical fundamentals of perception, planning, and navigation systems. The courses include practical work on sensor fusion algorithms, planning and search methods, configuration space decomposition, and camera transformation mathematics.
                        </p>
                    </div>
                </div>

                <div className="project-story">
                    <h3>Automated TSP Crown 6500 - (2024-2025)</h3>
                    
                    <div className="project-images">
                        <div className="image-group multiple-images">
                            <img src={tspGIF} alt="Autonomous TSP Forklift in operation" className="project-image" />
                            <img src={tspCrown} alt="Crown TSP 6500 forklift" className="project-image" />
                        </div>
                        <p className="image-caption">
                            Forklift operating autonomously on the warehouse
                        </p>
                    </div>

                    <div className="project-content">
                        <p>
                            I worked on the full automation of a warehouse turret forklift (Crown TSP 6500) as part of a project with Oddness, targeting autonomous logistics for Sodimac's distribution centers. This involved intercepting and emulating human control signals via a custom microcontroller interface, then outfitting the forklift with LiDAR, IMU, and wheel encoders to enable autonomous operation. The system connects directly to the Warehouse Management System (WMS), allowing the forklift to navigate aisles, retrieve pallets, and execute tasks without human intervention.
                        </p>
                    </div>
                </div>

                <div className="project-story">
                    <h3>SAE AutoDrive Challenge - Texas A&M - (2024)</h3>
                    
                    <div className="project-images">
                        <div className="image-group single-image">
                            <img src={tamuCar} alt="Custom robot control dashboard" className="project-image" />
                        </div>
                        <p className="image-caption">In the lab working on the TAMU car</p>
                    </div>

                    <div className="project-content">
                        <p>
                            I Collaborated on Texas A&M's AutoDrive team to secure 2nd place overall in the SAE AutoDrive Challenge by developing advanced Level 4 autonomous vehicle systems. Focused on real-time perception, sensor fusion, and planning algorithms to enable complex driving maneuvers including intersection navigation, traffic light recognition, lane changes, and dynamic obstacle avoidance in challenging real-world environments.
                        </p>
                    </div>
                </div>

                <div className="project-story">
                    <h3>Automated JLG 10MSP - (2024)</h3>
                    
                    <div className="project-images">
                        <div className="image-group multiple-images">
                            <img src={jlgGIF} alt="Autonomous JLG stock picker in operation" className="project-image" />
                            <img src={jlgMSP} alt="JLG 10MSP forklift" className="project-image" />
                        </div>
                        <p className="image-caption">
                            Autonomous stock picker on the Sodimac store
                        </p>
                    </div>

                    <div className="project-content">
                        <p>
                            This project was developed as part of a CORFO-funded R&amp;D initiative led by Oddness, in partnership with Sodimac, to explore autonomous solutions for in-store logistics. I worked on automating a JLG 10MSP stock picker to operate autonomously within retail environments. In addition to emulating human controls and integrating sensors for perception, we added seven custom actuators and a vacuum gripper, enabling the robot to pick boxes directly from shelves. This allowed it to assist store employees by preparing stock replenishment early in the day. My role included hardware integration, object detection, and developing the autonomous navigation system.
                        </p>
                    </div>
                </div>

                <div className="project-story">
                    <h3>PointLIO ROS2 Integration - (2024)</h3>
                    
                    <div className="project-content">
                        <p>
                            Although I don't contribute to open source as much as I'd like, one project I'm particularly proud of is my ROS2 integration of <a href="https://www.researchgate.net/publication/369891453_Point-LIO_Robust_High-Bandwidth_Light_Detection_and_Ranging_Inertial_Odometry" target="_blank" rel="noopener noreferrer" className="bio-link">PointLIO</a>, a state-of-the-art LiDAR-Inertial Odometry algorithm at the time of implementation. Beyond porting the core algorithm to ROS2, I extended the package to support most commonly used 3D LiDAR models on the market, making it easier for others in robotics to adopt the system. The project has been widely used and well received in the community, gaining significant traction on GitHub. You can find the repository <a href="https://github.com/dfloreaa/point_lio_ros2" target="_blank" rel="noopener noreferrer" className="bio-link">here</a>.
                        </p>
                    </div>
                </div>
                
                <div className="project-story">
                    <h3>SCARA Robotic Arm - Capstone Project (2023)</h3>
                    
                    <div className="project-images">
                        <div className="image-group single-image">
                            <img src={capstoneGIF} alt="SCARA robotic arm in operation" className="project-image" />
                        </div>
                        <p className="image-caption">
                            Custom-built SCARA arm for my Capstone
                        </p>
                    </div>

                    <div className="project-content">
                        <p>
                            For my 2023 capstone project in Robotics Engineering, I designed, built, and implemented a SCARA robotic arm from scratch, with a focus on maximizing payload capacity at the end effector. The project involved full-stack development—including CAD, electronics, control systems, and kinematics, alongside ROS2 Humble integration using MoveIt 2 for motion planning and execution.
                        </p>
                    </div>
                </div>

                <div className="project-story">
                    <h3>Maritime RobotX Challenge - (2021 - 2022)</h3>
                    
                    <div className="project-images">
                        <div className="image-group single-image">
                            <img src={caleuche} alt="Caleuche autonomous catamaran" className="project-image" />
                        </div>
                        <p className="image-caption">
                            Caleuche, our catamaran at RobotX 2022
                        </p>
                    </div>

                    <div className="project-content">
                        <p>
                            As part of my university's team for the Maritime RobotX Challenge, I contributed to the development of an autonomous catamaran and drone system designed to complete a series of perception and navigation challenges in a marine environment. Our team has been part of both the 2022 and 2024 competitions, held in Australia and the U.S. respectively. I was part of the computer vision and simulation subteams, working on the perception and object detection pipelines for the boat, and building simulation environments in Gazebo.
                        </p>
                    </div>
                </div>

                <div className="closing">
                    <p>
                        These projects represent my journey in robotics from academic research to industrial applications. 
                        Each project has contributed to my understanding of autonomous systems and my passion for 
                        advancing the field of robotics.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AllProjects;