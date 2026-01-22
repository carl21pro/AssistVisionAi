# 🤖 AssistVisionAi

AssistVisionAi is a professional, anime-styled AI assistant website designed to deliver clean, intelligent, and fast AI responses. It features a modern futuristic UI, real-time system information, and GPT-4 powered conversations. This project is built for both personal use and deployment as a public AI website.

FEATURES  
• AI chat interface similar to ChatGPT  
• Professional, calm, and helpful AI responses  
• Anime-inspired futuristic dark design  
• Anime AI profile avatar  
• Live Philippine Time & Date (GMT+8)  
• User battery percentage detection with charging status  
• Mobile and desktop responsive layout  
• Secure backend API handling (no API keys exposed)  
• Ready for deployment on Vercel  

HOW IT WORKS  
The user sends a message through the chat interface. The message is forwarded to a backend server that securely communicates with the GPT-4 API. The AI generates a response and sends it back to the frontend in real time.

TECH STACK  
Frontend: HTML, CSS, Vanilla JavaScript  
Backend: Node.js, Express  
AI: OpenAI GPT-4 API  

PROJECT STRUCTURE  
assistvisionai/  
public/  
- index.html  
- style.css  
- app.js  
server/  
- server.js  
- .env  
.gitignore  
package.json  
README.md  

HOW TO RUN LOCALLY (FOR FORKERS)  
1. Fork the repository on GitHub  
2. Clone your fork using:  
git clone https://github.com/yourusername/assistvisionai.git  
cd assistvisionai  

3. Install dependencies:  
npm install  

4. Create a .env file inside the server folder and add your API key:  
OPENAI_API_KEY=your_gpt4_api_key_here  

Never commit or upload your .env file.  

5. Run the server:  
npm start  

6. Open in browser:  
http://localhost:3000  

DEPLOYING TO VERCEL  
Push the repository to GitHub, go to https://vercel.com, import the project, add the environment variable OPENAI_API_KEY, then deploy. The site will be live once deployment finishes.

OWNER INFORMATION  
Owner & Developer: Jerobie laug laug  
Facebook: https://www.facebook.com/profile.php?id=61560890733272  

LICENSE  
This project is licensed under the MIT License. You are free to use, modify, and distribute this project with proper credit to the original author.

If you like this project, feel free to fork it, customize it, and build your own AI assistant.￼Enter
