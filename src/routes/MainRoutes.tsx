import { Route, Routes, Navigate } from "react-router-dom";
import { MainPage } from "../pages/mainPage/MainPage";
import { QuizPage } from "../pages/quizPage/QuizPage";
import { StoryCharactersPage } from "../pages/storyPage/StoryCharactersPage";

export function MainRoutes () {
    return (
      <>
        <Routes>
        {/* MAIN PAGE */}
        <Route path="/" element={<MainPage />} />
        <Route path="story" element={<StoryCharactersPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </>
    )
}