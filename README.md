⚡ Spectrave Dashboard — Front-End Assessment
This project is a responsive and interactive dashboard developed using React, Tailwind CSS, Material UI, and Chart.js. It was built as part of the Front-End Developer Assessment for Spectrave (Pvt) Ltd.

The dashboard features multiple tabs for site metrics, anomaly analysis, and downloadable reports, complete with charts, tables, and data export functionality.

—

🛠️ Project Setup
Follow the steps below to run the application locally:


cd spectrave-dashboard

Install dependencies all provided in req.txt

npm install

Run the development server:

npm run dev

Open your browser and visit http://localhost:5173

—

🔧 Tech Stack & Libraries
The project uses the following libraries and tools:

🧱 Framework & Tooling

React 19 – UI framework

Vite 7 – Build tool for fast development

🎨 Styling

Tailwind CSS 3.4 – Utility-first CSS framework

Material UI (MUI) 7.2 – Component library

Emotion – CSS-in-JS for MUI

PostCSS & Autoprefixer – Modern CSS processing

📊 Charts & Visualization

Chart.js 4.5 – Core charting library

react-chartjs-2 5.3 – React wrapper for Chart.js

📁 File Utilities

file-saver – Download CSV files in-browser

jszip – Create ZIP files dynamically on the client

🧪 Development Tools

eslint – Code linting and formatting

@vitejs/plugin-react – React support for Vite

—



📦 Features
Dashboard with 4 interactive charts & KPI cards

Site Info placeholder (customizable)

Anomalies Tab with reference table & image

Reports Tab:

Downloadable images

CSV report export

ZIP bundling of all assets

—

🚀 Deployment
this project is already deployed on vercel



Static file host (via dist/ after npm run build)

Build for production:

npm run build