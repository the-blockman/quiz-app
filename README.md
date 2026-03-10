# Quiz App

A responsive quiz application that allows users to test their knowledge across different topics and difficulty levels. The app fetches questions dynamically from an external trivia API and tracks user performance with a quiz history feature.

🔗 **Live Demo:**
https://quiz-app-omega-nine-14.vercel.app/

---

# Features

### Quiz Setup

- Choose number of questions
- Select difficulty level
- Select quiz category
- Start quiz instantly

### Interactive Quiz

- Multiple-choice questions
- Questions fetched dynamically from the Open Trivia Database
- Instant progression to the next question after selecting an answer
- Clean question layout with selectable answer buttons

### Results Screen

After completing a quiz, users can:

- View their final score
- Restart the quiz
- Review their answers
- View quiz history

### Answer Review

Users can review:

- The question
- Their selected answer
- The correct answer (if they were wrong)

### Quiz History

- Stores previous quiz attempts
- Shows score, category, and date
- Data saved in **localStorage** so history persists between sessions

### Error Handling

The app gracefully handles:

- Network errors
- Invalid API responses
- Cases where no questions are returned

### Search Functionality

- Search for quiz topics/categories
- Automatically selects matching categories

---

# Tech Stack

**Frontend**

- React
- JavaScript (ES6+)
- CSS / Tailwind styling

**API**

- Open Trivia Database

**Deployment**

- Vercel

---

# Project Structure

```
src
│
├── components
│   ├── QuizStart.jsx
│   ├── QuestionCard.jsx
│   ├── ScoreSummary.jsx
│   ├── QuizHistory.jsx
│   └── AnswerList.jsx
│
├── services
│   └── api.js
│
├── utils
│   └── decodeHtml.js
│
├── App.jsx
└── main.jsx
```

---

# How It Works

1. The user starts on the **Quiz Start page**
2. They choose difficulty, category, and number of questions
3. Questions are fetched from the trivia API
4. Each answer selection:
   - Stores the user's answer
   - Checks if it is correct
   - Moves to the next question

5. After the final question:
   - Score is calculated
   - Results are saved to quiz history

6. The user can:
   - Review answers
   - Restart the quiz
   - View quiz history

---

# Installation (Local Development)

Clone the repository:

```
git clone https://github.com/your-username/quiz-app.git
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

---

# Future Improvements

Planned improvements include:

- Better animations and transitions
- Improved mobile responsiveness
- Timer for each question
- Difficulty-based scoring
- Leaderboard system
- Backend database for storing quiz history
- Authentication for user accounts

---

# License

This project is open source and available under the MIT License.
