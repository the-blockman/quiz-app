export const fetchQuizQuestions = async (amount, difficulty) => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`,
    );

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    return [];
  }
};
