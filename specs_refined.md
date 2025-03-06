# Refined IQ Testing Application Specifications

These specifications outline the requirements for a React-based IQ testing application, utilizing Vite, Tailwind CSS, and a serverless AWS Lambda backend with DynamoDB.

## Core Features

1.  **Age-Adjusted IQ Testing:**
    *   The application must factor in the user's age to provide a more accurate IQ score.
    *   Age input should be clear and intuitive.

2.  **Technology Stack:**
    *   Frontend: React, Vite, Tailwind CSS
    *   Backend: AWS Lambda (serverless), DynamoDB

3.  **REST API Communication:**
    *   The frontend and backend will communicate via RESTful API endpoints.

4.  **No Initial Registration:**
    *   Users can immediately begin the IQ test without creating an account.

5.  **User Statistics:**
    *   Display the total number of users who have taken the test in the past 24-48 hours.
    *   Consider displaying this data in an engaging visual format (e.g., a simple chart).

6.  **IQ Score Presentation and Monetization:**
    *   Upon test completion, display the user's absolute IQ score.
    *   Offer a premium option to access:
        *   Relative standing among users of the same age group and/or language.
        *   Global percentile ranking.
    *   Optionally, request the user's email address for future updates or promotions (clearly state the purpose of collecting the email).

7.  **Session Persistence:**
    *   Automatically save the user's progress in the browser's local storage.
    *   If the user leaves the page and returns, restore the previous session and allow them to continue the test.

8.  **Design and Styling:**
    *   Initial design should be clean and modern, using only CSS (Tailwind CSS).
    *   Focus on a user-friendly interface and intuitive navigation.
    *   Prioritize accessibility.

## Additional Considerations

*   **Test Question Variety:** Ensure a diverse range of question types to accurately assess cognitive abilities.
*   **Adaptive Testing (Future Enhancement):** Consider implementing adaptive testing, where the difficulty of questions adjusts based on the user's performance.
*   **Data Privacy:** Implement appropriate measures to protect user data and comply with privacy regulations.
*   **Scalability:** Design the backend to handle a large number of concurrent users.
*   **Error Handling:** Implement robust error handling and logging to identify and resolve issues quickly.
*   **A/B Testing:** Implement A/B testing for different UI elements and monetization strategies to optimize performance.

## Future Enhancements

*   **Multi-Language Support:** Allow users to take the test in different languages.
*   **Detailed Performance Analysis:** Provide users with a breakdown of their performance in different cognitive areas.
*   **Personalized Recommendations:** Offer personalized recommendations for cognitive training or resources based on the user's results.
