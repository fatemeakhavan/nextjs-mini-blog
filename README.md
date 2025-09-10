# MiniBlog 📝

A simple **Next.js mini blog** with a user dashboard.  
Built using **Next.js App Router, TypeScript, Tailwind, React Query, React Hook Form, Zod, and JSON Server**.  

---

## 🚀 Features
- Blog homepage with posts (from JSONPlaceholder)  
- Blog detail page with dynamic routing + SEO + Open Graph  
- Dashboard profile form (name, family, email, mobile, date of birth, favorites dropdown, bio)  
- Validation with **React Hook Form + Zod**  
- Data fetching & updating via **React Query** + **JSON Server**  
- Responsive UI with **Tailwind + shadcn/ui**  

---

## Rendering and Caching Choices

I used **Client-Side Rendering (CSR)** to fetch data dynamically from the API.  
Data fetching and caching are handled with **React Query** and custom hooks, which manage loading, error states, and background refetching.

---

If I had more time, I would focus on improving the UI/UX.
This includes creating a more polished design, enhancing responsiveness across devices, and improving accessibility to provide a smoother and more user-friendly experience.

## ⚙️ Run the project

```bash
# install dependencies
npm install

# run Next.js + JSON Server together
npm run dev:all
