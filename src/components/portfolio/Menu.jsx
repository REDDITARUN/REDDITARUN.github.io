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
import Work16 from "../../assets/Projects/16.jpg";
import Work17 from "../../assets/Projects/17.jpg";
import Work18 from "../../assets/Projects/18.jpg";
import Work19 from "../../assets/Projects/19.jpg";
import Work20 from "../../assets/Projects/20.jpg";
import Work21 from "../../assets/Projects/21.jpg";
import Work22 from "../../assets/Projects/22.jpg";
import Work23 from "../../assets/Projects/23.jpg";
import Work24 from "../../assets/Projects/24.jpg";


const Menu = [

    {
        id: 1,
        image: Work1,
        title: "DEPTHS",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Real-time spatial awareness tool for the visually impaired, with depth and object tracking under 4ms (V100) and 0.16ms (H100).</li>
					<li>Empowers users with safe, intuitive navigation in any setting.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Optimized depth estimation and object detection workflow in 4 ms per frame.</li>
					<li>15–25x faster than leading models like MonoDETR, YOLO-Depth, and DPT.</li>
					
				</ul>
			</>
		),
		
        category: ["AI/ML/RL"],
        url: "https://medium.com/@teendifferent/real-time-vision-aid-for-the-blind-depth-and-proximity-tracking-under-4ms-2a2c09a4d211"
    },
    {
        id: 2,
        image: Work2,
        title: "F.E.A.S.T - Food & Ingredient AI Suggestion Technology",
        description: (
			<>
				<ul className="portfolio__list">
                <li>Real-time ingredient detection recipe generation with nutritional information.</li>
                <li>Cuts costs, saves time, and inspires home cooking.</li>
            	</ul>
				<p><strong>Specs:</strong></p>
				<ul  className="portfolio__list">
					<li>Automated Custom Data Generation & Annotation.</li>
					<li>100+ ingredients, 2.5 million recipies.</li>
					<li>YOLO V7, V9 for Object Detection</li>
					<li>BART, T5 transformers for recipe gen.</li>
				</ul>
			</>
		),
        category: ["AI/ML/RL"],
        repositoryUrl: "https://github.com/REDDITARUN/F.E.A.S.T"
    },
    {
        id: 3,
        image: Work3,
        title: "PEFT",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Guide on efficient fine-tuning adapters using multi-class image datasets.</li>
					<li>Ideal for researchers seeking high-impact, low-resource model optimization.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Powered by 12K+ images across 25+ classes from two robust datasets.</li>
					<li>Validated with 5 unique peft adapters.</li>
					<li>Achieves 20x speed increase with 90%+ precision.</li>
				</ul>
			</>
		),
		
        category: ["AI/ML/RL"],
        url: "https://github.com/REDDITARUN/P_E_F_T",
        repositoryUrl: "https://medium.com/predict/beyond-lora-a-comprehensive-guide-to-efficient-model-fine-tuning-5983bb4899fb",
		repositoryUrl: "https://medium.com/predict/battle-of-the-adapters-efficient-fine-tuning-methods-compared-e9fac9e4f10d"
	},
    {
        id: 4,
        image: Work4,
		title: "Face Recognition Using Meta-Learning",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Efficient facial recognition using Prototypical & Siamese Networks.</li>
					<li>High-accuracy recognition with limited data for secure verification systems.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Pairs from 40 classes.</li>
					<li>Twin networks, embedding creation, similarity assessment.</li>
					<li>95%+ accuracy with low data requirements, optimized training.</li>
				</ul>
			</>
		),
        category: ["AI/ML/RL"],
        
        repositoryUrl: "https://github.com/REDDITARUN/Meta_ML",
		url: "https://medium.com/@teendifferent/beyond-deep-learning-how-meta-learning-unlocks-powerful-ai-745c481980a1?source=user_profile---------0----------------------------",
		url: "https://medium.com/@teendifferent/beyond-deep-learning-meta-learning-with-prototypical-networks-for-efficient-ai-56503b642c06"

    },
    {
        id: 5,
        image: Work5,
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
        repositoryUrl: "https://github.com/REDDITARUN/RxRover-Roaming-for-Rapid-Relief",
		
        
    },
	{
        id: 6,
        image: Work6,
		title: "DINO Annotator",
		description: (
				<>
					<ul className="portfolio__list">
						<li>Auto-annotate custom datasets for object detection using Grounding DINO.</li>
						<li>Speeds up box labeling with zero-shot detection for rare or unseen objects.</li>
					</ul>
					<p><strong>Specs:</strong></p>
					<ul className="portfolio__list">
						<li>Formats: PASCAL VOC, COCO, YOLO annotations.</li>
						<li>Transformer-based DINO with grounded pre-training.</li>
					</ul>
				</>
			),		
		
        category: ["AI/ML/RL"],
        repositoryUrl: "https://github.com/REDDITARUN/DINO_Annotator?tab=readme-ov-file",
		url: "https://medium.com/predict/simplifying-object-detection-annotate-your-custom-dataset-with-grounding-dino-148576d497da"
        
    },
	{
        id: 7,
        image: Work7,
		title: "IntelliRAG",
		description: (
				<>
					<ul className="portfolio__list">
						<li>A personalized AI assistant with RAG (Retrieval-Augmented Generation).</li>
						<li>Answers questions based on personal documents, uses vector stores for fast and accurate retrieval.</li>
					</ul>
					<p><strong>Specs:</strong></p>
					<ul className="portfolio__list">
						<li>Built on - LangChain, FAISS, Ollama.</li>
						<li>Supports custom PDF inputs.</li>
						<li>Optimized for efficient and relevant document chunk retrieval.</li>
					</ul>
				</>
			),		
        category: ["AI/ML/RL"],
        
        repositoryUrl: "https://github.com/REDDITARUN/RAG-Personalized-AI/blob/main/README.md",
		url: "https://medium.com/@teendifferent/unlocking-ai-superpowers-with-rag-smarter-answers-from-your-personal-data-c6accabf013c"
    },
	{
        id: 8,
        image: Work8,
		title: "NEXUS",
		description: (
			<>
				<ul className="portfolio__list">
					<li>A solution hub for NEWS classification, Image Analysis, and Anamaly Detection.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Processed 500K+ time series points, 20K+ text entries, 10K+ classifications</li>
					<li>Models: CNN, RNN, LSTM, Autoencoder, ViT, EfficientNet</li>
					<li>Results: 94% accuracy (time series), 93% (text), 95% (image)</li>
					
				</ul>
			</>
		),
		
        category: ["AI/ML/RL"],
        repositoryUrl: "https://github.com/REDDITARUN/N.E.X.U.S"
    },
	{
        id: 9,
        image: Work9,
		title: "Deep RL",
		description: (
			<>
				<ul className="portfolio__list">
					<li>A hub for Deep Reinforcement Learning models for dynamic problem-solving.</li>
					<li>Ideal for autonomous control, gaming, and robotics.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Implemented DQN, DDQN, and A2C with experience replay.</li>
					<li>Tested on OpenAI Gym: CartPole, Mountain Car, Bipedal Walker.</li>
					<li>Compares variants on speed, stability, and reward.</li>
				</ul>
			</>
		),
		
        category: ["AI/ML/RL"],
     
        repositoryUrl: "https://github.com/REDDITARUN/DeepRL"
    },
	{
        id: 10,
        image: Work10,
		title: "Green AI",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Carbon footprint analysis and reduction tools for tech and AI model training.</li>
					<li>Helps to make eco-friendly choices, optimize energy, and reduce emissions.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Real-time carbon insights via Electricity Map API.</li>
					<li>Carbon-optimized training on Google Cloud Vertex AI.</li>
					<li>Impact analysis with BigQuery and Google Cloud tools.</li>
				</ul>
			</>
		),
		
        category: ["AI/ML/RL"],
        repositoryUrl: "https://github.com/REDDITARUN/Carbon-Footprint",
		url: "https://medium.com/@teendifferent/green-computing-harnessing-ai-for-a-sustainable-future-0626cc94efaa"
    },
	{
        id: 11,
        image: Work11,
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
    
        repositoryUrl: "https://github.com/REDDITARUN/Predictive-Crime-Analysis"
    },
	{
        id: 12,
        image: Work12,
		title: "Tiny LLM",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Tested lightweight LLMs for local personal assistance with minimal resources.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Designed 15 custom tests across tech, coding, medical, science, and arts.</li>
					<li>Gemma leads in speed (15.08s avg); Llama3.2 excels in relevance (0.8 score)</li>
					<li>Verdict: Code completion (CodeGemma), in-depth research (Llama3.2), light scripting (Phi3).</li>
				</ul>
			</>
		),
		
		category: ["AI/ML/RL"],
        repositoryUrl: "https://github.com/REDDITARUN/tiny_llm",
		url: 'https://medium.com/@teendifferent/exploring-tiny-llms-as-your-personal-assistant-llama-3-2-codegemma-and-more-679f5455c8c4'
    },
	{
        id: 13,
        image: Work13,
		title: "AI at Play",
		description: (
				<>
					<ul className="portfolio__list">
					<li>RL in Squirrel Maze & Stock Trader for strategic learning and decision-making.</li>
					<li>Perfect for testing RL in real-world-inspired scenarios.</li>
					</ul>
					<p><strong>Specs:</strong></p>
					<ul className="portfolio__list">
                <li>1000 episodes; 85% reward stabilization.</li>
                <li>Double Q-Learning: 25% better stability in stochastic environments.</li>
                <li>90% policy-driven actions by episode 800 with tuned epsilon decay.</li>
            </ul>
				</>
			),		
		
        category: ["AI/ML/RL"],
        repositoryUrl: "https://github.com/REDDITARUN/AI_at_play_SquirrelMaze_StockTrader_RL/tree/main"
    },
	{
        id: 14,
        image: Work14,
		title: "Music Vision",
		description: (
				<>
					<ul className="portfolio__list">
						<li>Genre classification with ANN, CNN, and Transfer Learning on spectrograms.</li>
						<li>Ideal for exploring deep learning in complex audio classification.</li>
					</ul>
					<p><strong>Specs:</strong></p>
					<ul className="portfolio__list">
						<li>10 genres, 10K samples.</li>
						<li>Results: ANN (72%), Custom CNN (63%), EfficientNetB0 (62%), VGG19 (58%).</li>
						<li>Core features: tone, pitch, range, and rhythm for sharp genre accuracy.</li>
					</ul>
				</>
			),		
		
		category: ["AI/ML/RL"],
        repositoryUrl: "https://github.com/REDDITARUN/Music_Genre_Classification_CNN/tree/main"
    },
	{
        id: 15,
        image: Work15,
		title: "Mobile Valuator",
		description: (
					<>
						<ul className="portfolio__list">
							<li>Predicts mobile price ranges using machine learning on tech specs.</li>
							<li>Ideal for competitive pricing analysis and value insights for smartphone markets.</li>
						</ul>
						<p><strong>Specs:</strong></p>
						<ul className="portfolio__list">
							<li>Based on 2,000 samples, 21 features.</li>
							<li>Results: SVM (86%), Decision Tree (83%), Naive Bayes (82%).</li>
							<li>Top Model: SVM for highest accuracy in predicting price categories.</li>
						</ul>
					</>
				),
				category: ["AI/ML/RL"],
        url: "https://medium.com/@teendifferent/a-beginners-journey-into-mobile-price-classification-with-machine-learning-d10238a0acdd",
        repositoryUrl: "https://github.com/REDDITARUN/Mobile-Price-Classification-Using-Machine-Learning/tree/main"
    },
	{
        id: 16,
        image: Work16,
		title: "Gear Shift DB",
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
        id: 17,
        image: Work17,
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
        id: 18,
        image: Work18,
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
        id: 19,
        image: Work19,
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
        id: 20,
        image: Work20,
		title: "Coldbox",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Hands-on pen-testing guide using Colddbox Easy and Kali Linux.</li>
					<li>Great for beginners in cybersecurity to practice real-world exploitation safely.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Setup: 2 VMs (target & attacker), Colddbox Easy on VirtualBox.</li>
					<li>Findings: Nmap found 2 ports; WPScan cracked 1 password.</li>
					<li>PHP reverse shell, Netcat on target port for access.</li>
				</ul>
			</>
		),
		
        category: ["Cyber Security"],
        repositoryUrl: "https://github.com/REDDITARUN/C0lddbox_Walkthrough?tab=readme-ov-file"
        
    },
	{
        id: 21,
        image: Work21,
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
        repositoryUrl: "https://github.com/REDDITARUN/Pintos-Projects",
        
    },
	{
        id: 22,
        image: Work22,
		title: "SnapShift",
		description: (
			<>
				<ul className="portfolio__list">
					<li>Efficient Python tool for bulk image scraping from Bing.</li>
					<li>Perfect for ML, web dev, and research projects needing large image datasets.</li>
				</ul>
				<p><strong>Specs:</strong></p>
				<ul className="portfolio__list">
					<li>Async multi-class downloads boost speed by 50%.</li>
					<li>Exclusively JPG for dataset uniformity.</li>
					<li>Adjustable parameters for categories, download limits, and adult content filtering.</li>
				</ul>
			</>
		),
        category: ["General"],     
        repositoryUrl: "https://github.com/REDDITARUN/Snap_Swift"
    },
	{
        id: 23,
        image: Work23,
		title: "ChatEase",
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
        repositoryUrl: "https://github.com/REDDITARUN/ChatEase_Interface/blob/main/README.md"
    },
	{
        id: 24,
        image: Work24,
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
     
    
    },


	
];

export default Menu;
