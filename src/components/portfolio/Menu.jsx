import Work1 from "../../assets/Projects/1.jpg";
import Work2 from "../../assets/Projects/2.jpg";
import Work3 from "../../assets/Projects/3.jpg";
import Work4 from "../../assets/Projects/4.jpg";
import Work5 from "../../assets/Projects/5.jpg";
import Work6 from "../../assets/Projects/6.jpg";
import Work7 from "../../assets/Projects/7.jpg";
import Work8 from "../../assets/Projects/8.jpg";
import Work9 from "../../assets/Projects/9.jpg";
import Work10 from "../../assets/Projects/10.jpg";
import Work11 from "../../assets/Projects/11.jpg";
import Work12 from "../../assets/Projects/12.jpg";
import Work13 from "../../assets/Projects/13.jpg";
import Work14 from "../../assets/Projects/14.jpg";
import Work15 from "../../assets/Projects/15.jpg";


const Menu = [
    {
        id: 1,
        image: Work1,
        title: "F.E.A.S.T - Food & Ingredient AI Suggestion Technology",
        description: (
			<>
				<ul className="portfolio__list">
                <li>Real-time ingredient detection recipe generation with nutritional information.</li>
                <li>Cuts costs, saves time, and inspires home cooking.</li>
            	</ul>
				<p><strong>Specs:</strong></p>
				<ul  className="portfolio__list">
					<li>Trained with 100+ ingredients, 5000 images.</li>
					<li>2.5 million recipies.</li>
					<li>YOLO V7, V9 for Object Detection</li>
					<li>BART and T5 transformers for recipe generation</li>
				</ul>
			</>
		),
        category: ["AI/ML/RL"],
        repositoryUrl: "https://github.com/REDDITARUN/F.E.A.S.T"
    },
    {
        id: 2,
        image: Work2,
        title: "RxRovers: Roaming for Rapid Relief",
        description: (
			<>
				<ul className="portfolio__list">
                <li>Optimizes medical supply delivery in hospitals using RL.</li>
                <li>Ensures timely delivery of medical supplies, enhancing patient care.</li>
            	</ul>
				<p><strong>Specs:</strong></p>
				<ul  className="portfolio__list">
					<li>Q-learning, Double Q-learning, DQN, DDQN, PPO, A2C</li>
					<li>Dynamic hospital environments with obstacles.</li>
					<li>Efficient navigation strategies.</li>
				</ul>
			</>
		),
        category: ["AI/ML/RL"],
        // url: "https://cryptoverse.gregsithole.com",
        repositoryUrl: "https://github.com/REDDITARUN/RxRover-Roaming-for-Rapid-Relief"
    },
    {
        id: 3,
        image: Work3,
		title: "Neural Nexus",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Implements CNNs, RNNs, LSTMs, Autoencoders, and Transformers for various tasks.</li>
					<li>Solves complex data problems effectively.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>CNNs: VGG13 for image classification.</li>
					<li>RNNs/LSTMs: Time-series forecasting.</li>
					<li>Autoencoders: Anomaly detection.</li>
					<li>Transformers: Text classification.</li>
				</ul>
			</>
		),		
        category: ["AI/ML/RL"],
        
        repositoryUrl: "https://github.com/REDDITARUN/Advanced-DL-CNN-RNN-LSTM-Transformer-Autoencoders"
    },
    {
        id: 4,
        image: Work4,
		title: "QuestAI: Mastering RL",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Solves RL environments like Frozen Lake, Lawn Mower, Squirrel Maze, and stock trading.</li>
					<li>Demonstrates RL's versatility.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Q-learning, Double Q-learning, SARSA.</li>
					<li>Custom RL environments.</li>
					<li>Matplotlib for visualization.</li>
				</ul>
			</>
		),
		
        category: ["AI/ML/RL"],
        repositoryUrl: "https://github.com/REDDITARUN/Defining-and-Solving-Reinforcement-Learning-Environments"
        
    },
	{
        id: 5,
        image: Work5,
		title: "Crimson Eye: Data-Driven Crime Analysis",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Enhances predictive policing by analyzing crime data.</li>
					<li>Optimizes law enforcement resource allocation.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Cleaned and processed datasets.</li>
					<li>Linear Regression, Logistic Regression, Naive Bayes, KNN, Decision Trees, XGBoost.</li>
					<li>Crime trends and model performance visualization.</li>
				</ul>
			</>
		),
		
        category: ["AI/ML/RL"],
        repositoryUrl: "https://github.com/REDDITARUN/Predictive-Crime-Analysis",
        
    },
	{
        id: 6,
        image: Work6,
		title: "DeepRL",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Implements Deep Reinforcement Learning algorithms.</li>
					<li>SOlving real-world applications with RL techniques.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>DQN, DDQN for Grid World, CartPole, Mountain Car.</li>
					<li>Experience Replay for storage and sampling.</li>
					<li>Actor-Critic (A2C) for continuous action spaces.</li>
				</ul>
			</>
		),
		
        category: ["AI/ML/RL"],
        
        repositoryUrl: "https://github.com/REDDITARUN/DeepRL"
    },
	{
        id: 7,
        image: Work7,
		title: "Pintos",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Programmed essential OS components like threading, synchronization, scheduling, and system calls.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Enhanced scheduler, alarm clock.</li>
					<li>Efficient scheduling algorithms.</li>
					<li>Locks, semaphores, condition variables.</li>
					<li>System call argument passing and kernel interaction.</li>
				</ul>
			</>
		),
		
        category: ["General"],
        repositoryUrl: "https://github.com/REDDITARUN/Pintos-Projects"
    },
	{
        id: 8,
        image: Work8,
		title: "Support Assistant Using DialogFlow and Flutter",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Chatbot for support using DialogFlow and Flutter.</li>
					<li>Enhances user support experience.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Intelligent conversation handling with DialogFlow.</li>
					<li>Flutter for chat interface.</li>
					<li>Parsed Text Package for link differentiation.</li>
				</ul>
			</>
		),
		
        category: ["General"],
     
        repositoryUrl: "https://github.com/REDDITARUN/Support_Assistant_Using_DialogFlow_And_FLutter"
    },
	{
        id: 9,
        image: Work9,
		title: "Music Genre Classification",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Classifies music genres using ANN, CNN, and transfer learning with human-level accuracy.</li>
					<li>Improves music recommendation systems.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>ANN: Dense and Dropout layers.</li>
					<li>CNN: VGG19 for image-based classification.</li>
					<li>Transfer Learning: EfficientNetB0, MobileNetV2.</li>
				</ul>
			</>
		),
		
        category: ["AI/ML/RL"],
        repositoryUrl: "https://github.com/kcharvi/Music_Genre_Classification_CNN"
    },
	{
        id: 10,
        image: Work10,
		title: "GearShift-DB: Master of Formula 1 Data Management",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Custom DBMS for Formula 1 data management.</li>
					<li>Enhances efficiency and decision-making.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Powered by PostgreSQL</li>
					<li>User-friendly UI: Flask, HTML, CSS, JS</li>
					<li>Centralized race results, driver standings</li>
					<li>Analytics for insights and trends</li>
				</ul>
			</>
		),
		
        category: ["General"],
    
        repositoryUrl: "https://github.com/REDDITARUN/GearShift-DB"
    },
	{
        id: 11,
        image: Work11,
		title: "AgriTractor-Manager: Farmer Tractor Management System",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Manages farmer tractor data.</li>
					<li>Streamlines tractor management.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Django 4 for robust backend.</li>
					<li>Responsive design with HTML5, CSS3, Bootstrap 5.</li>
				</ul>
			</>
		),
		
        category: ["General"],
        repositoryUrl: "https://github.com/REDDITARUN/AgriTractor-Manager"
    },
	{
        id: 12,
        image: Work12,
		title: "Privileged Identity Management - Intune",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Implements data loss prevention and privileged identity management.</li>
					<li>Ensures compliance and security.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Microsoft Intune for device management.</li>
					<li>MFA for secure access.</li>
					<li>RBAC for access permissions.</li>
					<li>Compliance policies for security standards.</li>
				</ul>
			</>
		),
		
        category: ["Cyber Security"],
        repositoryUrl: "https://github.com/REDDITARUN/Intune-PCI-Compliance"
    },
	{
        id: 13,
        image: Work13,
		title: "CrowdSec Deployment Guide: Enhancing Cybersecurity",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Deployment steps for CrowdSec, an intrusion prevention system.</li>
					<li>Enhances collective security.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Behavioral analysis for suspicious activities.</li>
					<li>Community-driven threat signal sharing.</li>
					<li>Real-time protection by blocking malicious IPs.</li>
				</ul>
			</>
		),
		
        category: ["Cyber Security"],
        
        repositoryUrl: "https://github.com/REDDITARUN/CrowdSec-Deployment-Guide"
    },
	{
        id: 14,
        image: Work14,
		title: "Online Book Store",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Cloud-based platform for university resources.</li>
					<li>Enhances user experience.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Amazon AWS for cloud computing.</li>
					<li>GraphQL API for efficient querying.</li>
					<li>Stripe for payment processing.</li>
					<li>ReactJS for dynamic interface.</li>
					<li>Amazon DynamoDB for data storage.</li>
				</ul>
			</>
		),
		
        category: ["General"],
        url: "https://www.npmjs.com/package/wallhaven-cli",
        repositoryUrl: "https://github.com/GregSithole/wallhaven-cli"
    },
	{
        id: 15,
        image: Work15,
		title: "Autonomous Obstacle Circumvent Droid",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Utilizes an integrated ultrasonic sensor to detect and avoid obstacles.</li>
					<li>Enhances navigation for robotics applications.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Powered by Arduino, C++, Python, RPi</li>
					<li>Equipped with autonomous motor capabilities.</li>
					
				</ul>
			</>
		),
		
        category: ["General"],
        url: "https://www.npmjs.com/package/wallhaven-cli",
        repositoryUrl: "https://github.com/GregSithole/wallhaven-cli"
    },

	
];

export default Menu;
