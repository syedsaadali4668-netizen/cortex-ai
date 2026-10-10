import dotenv from 'dotenv'; dotenv.config();
import {connectDB} from './config/db.js';
import Job from './models/Job.js';
await connectDB();
const jobs=[
['React Developer Internship','NovaSoft','Remote / Pakistan','Internship','PKR 35k-70k','Build premium React dashboards, landing pages, reusable components, and analytics interfaces.',['React','Vite','Tailwind','Git'],'Seed','https://www.linkedin.com/jobs/'],
['AI Engineer Internship','Cortex Labs','Remote','Internship','PKR 50k-100k','Work on RAG, agent workflows, prompt systems, evaluation, and AI automation.',['Python','RAG','LLM','Gemini','APIs'],'Seed','https://www.linkedin.com/jobs/'],
['MERN Stack Developer','StackCraft','Lahore / Remote','Full-time','PKR 120k-220k','Develop SaaS apps using MongoDB, Express, React, Node, auth, and dashboards.',['MongoDB','Express','React','Node.js','JWT'],'Seed','https://www.linkedin.com/jobs/'],
['Data Analyst Internship','InsightIQ','Islamabad','Internship','PKR 40k-80k','Analyze datasets, dashboards, SQL queries, metrics, and business reports.',['SQL','Excel','Python','Power BI'],'Seed','https://www.linkedin.com/jobs/'],
['Frontend Developer Remote','PixelForge','Remote','Full-time','$600-$1200','Create animated responsive interfaces with React, Tailwind, and Framer Motion.',['React','Tailwind','Framer Motion','UI UX'],'Seed','https://www.linkedin.com/jobs/'],
['Machine Learning Intern','MedAI Research','Remote','Internship','PKR 45k-90k','Assist with model training, evaluation, data analysis, and research prototypes.',['Python','ML','Pandas','Scikit-learn'],'Seed','https://www.linkedin.com/jobs/'],
['Node.js Backend Developer','APIWorks','Karachi / Remote','Full-time','PKR 150k-260k','Build secure REST APIs, auth, cloud deployments, and database systems.',['Node.js','Express','MongoDB','JWT','Render'],'Seed','https://www.linkedin.com/jobs/'],
['Full Stack Developer','LaunchOps','Remote','Contract','$800-$1800','Own frontend, backend, database, deployment, AI features, and product iteration.',['React','Node.js','MongoDB','AI APIs','Vercel'],'Seed','https://www.linkedin.com/jobs/']
];
await Job.deleteMany({source:'Seed'});
await Job.insertMany(jobs.map(j=>({title:j[0],company:j[1],location:j[2],type:j[3],salary:j[4],description:j[5],requirements:j[6],source:j[7],applyLink:j[8]})));
console.log('Production seed complete: sample job catalog inserted. Create your own user from the Signup page.');
process.exit();
