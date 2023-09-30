import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import chatpdfImg from '@/public/chatpdf.png';
import devcamperImg from '@/public/devcamper.png';
import proshopImg from '@/public/proshop.png';
import twitterImg from '@/public/twitter.png';
import videotranscodingImg from '@/public/video_processing_service.png';
import tracalorieImg from '@/public/tracalorie.png';

export const links = [
	{
		name: 'Home',
		hash: '#home'
	},
	{
		name: 'About',
		hash: '#about'
	},
	{
		name: 'Projects',
		hash: '#projects'
	},
	{
		name: 'Skills',
		hash: '#skills'
	},
	{
		name: 'Experience',
		hash: '#experience'
	},
	{
		name: 'Contact',
		hash: '#contact'
	}
] as const;

export const experiencesData = [
	{
		title: 'Bachelor in Engineering',
		location: 'Bengaluru',
		description:
			'I graduated in Mechanical Engineering after 4 years of studying. I immediately found a job as a mentor.',
		icon: React.createElement(LuGraduationCap),
		date: '2019'
	},
	{
		title: 'Coding Bootcamp',
		location: 'Bengaluru',
		description:
			'I studied DSA, System Design, Software Development and Cloud Technologies. Here I upskilled myself to build full stack web applications end to end',
		icon: React.createElement(CgWorkAlt),
		date: '2022'
	},
	{
		title: 'Full-Stack Developer',
		location: 'Remote',
		description:
			"I am now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I build SAAS and provide software solutions.",
		icon: React.createElement(FaReact),
		date: '2023'
	}
] as const;

export const projectsData = [
	{
		title: 'chatPDF',
		description:
			'AI RAG SaaS for chatting with PDF files.',
		tags: ['Next 13', 'Pinecone DB', 'Drizzle', 'OpenAI API', 'Stripe', 'Vercel AI'],
		imageUrl: chatpdfImg
	},
	{
		title: 'Video Transcoder',
		description:
			'Video Processing Service to transcode video into 360p. Containerized serverless backend architecture on cloud.',
		tags: [ 'NextJS 13', 'FFmpeg', 'Typescript', 'Docker', 'GCP'],
		imageUrl: videotranscodingImg
	},
	{
		title: 'ProShop',
		description:
			'Modern e-commerce shopping platform on MVC pattern. Admin Dashboard and 4-step checkout process with PayPal integration.',
		tags: ['Javascript', 'React', 'Redux', 'MongoDB', 'JWT', 'PayPal'],
		imageUrl: proshopImg
	},
	{
		title: 'DevCamper',
		description:
			'Backend RESTful API For Bootcamp App. Advanced Mongoose Queries, search filtering by distance, reset password and API Security. ',
		tags: ['JS', 'MapQuestAPI', 'MongoDB', 'Mailtrap', 'Docgen'],
		imageUrl: devcamperImg
	},
	{
		title: 'twitter-clone',
		description:
			'Server-side static page rendering for fast page reload, improved performance and better SEO. Backend built on graphQL server with Prisma ORM.',
		tags: ['NextJS', 'Typescript', 'GraphQL', 'Prisma', 'AWS', 'Redis'],
		imageUrl: twitterImg
	},
	{
		title: 'TraCalorie',
		description:
			'Calorie Tracker Application built on pure vanilla javascript to keep track of diet and workout',
		tags: ['HTML', 'CSS', 'Vanilla JS', 'DOM', 'Webpack'],
		imageUrl: tracalorieImg
	}
] as const;

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Firebase',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	'Prisma',
	'MongoDB',
	'Redux',
	'GraphQL',
	'Apollo',
	'Express',
	'PostgreSQL',
	'Google Cloud',
	'AWS',
	'Framer Motion'
] as const;
