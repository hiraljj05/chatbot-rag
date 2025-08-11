# 🤖 KMIT College ChatBot (Gemini API + Flask + Supabase + RAG)

A smart AI chatbot built for **Keshav Memorial Institute of Technology (KMIT)** to help students, faculty, and visitors instantly access important information, events, and resources via a floating assistant on the college website.

---

## ✨ Features

- 💬 Conversational AI powered by **Gemini LLM** (Google Generative AI)  
- 📚 Retrieval-Augmented Generation (RAG) using **FAISS** + **Sentence Transformers**  
- 🗃️ College info and event data loaded via **JSON** files and **Supabase**  
- 🔗 Quick redirects to portals like Attendance, Exam Info, Syllabus, etc.  
- 🧑‍🎓 Smart responses to FAQs, context-based queries, and navigation requests  
- 🖼️ Floating chatbot UI embedded on the website using **Vite + TypeScript**  
- 🔐 CORS-enabled **Flask** backend serving AI and database responses  

---

## ⚙️ Tech Stack

| Layer          | Tech Used                          |
|----------------|----------------------------------|
| 🧠 AI Model     | Gemini API (Google Generative AI)|
| 🔍 Embeddings   | Sentence-Transformers (MiniLM-L6-v2) |
| 📥 Vector DB   | FAISS (Facebook AI Similarity Search)|
| 🌐 Backend     | Flask + Flask-CORS + Supabase SDK |
| 📊 Data        | JSON file + Supabase DB           |
| 🧪 Scraping    | Selenium (ChromeDriver)           |
| 🖥️ Frontend    | Vite + TypeScript                 |

---

## 🖼️ Chatbot Preview

![Screenshot 2025-06-04 190815](https://github.com/user-attachments/assets/58e650f2-15b7-463a-83bc-4d5b167298a7)

![Screenshot 2025-06-04 190823](https://github.com/user-attachments/assets/8c2d7e99-e4e6-4916-bb78-f02681c40e78)

---

## 🧠 How It Works

1. User submits a question via the floating chatbot.  
2. Query is normalized and embedded using Sentence Transformers.  
3. FAISS retrieves the most relevant context from the JSON data.  
4. Context and query are sent to Gemini API for the final response generation.  
5. Supabase is queried for dynamic content like event updates.  
6. Response is displayed in the chatbot UI.

---

## 📩 Contact

For questions or to see a demo, feel free to reach out!

---



