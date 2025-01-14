# 3D Carousel Gallery

This project implements a 3D carousel gallery that allows users to navigate through items using keyboard or mouse scroll events. It features a visually appealing gallery layout with smooth transitions and 3D effects.

## Setup Instructions

To get started with this project, follow the steps below:

### Prerequisites:
- Ensure that you have a modern web browser (e.g., Chrome, Firefox, Safari, etc.).
- This project does not require any server-side technology or frameworks; it works entirely with frontend technologies.

### Steps:
1. **Clone the repository**:
   ```bash
   git clone <repository-url>

2. **Navigate to the project directory:**
   ```bash
   cd <project-directory>

3. **Run the project:**
   - Open index.html in a web browser of your choice.
   - You can also use a local server (like VS Code's Live Server) to serve the files.
  
## 🛠 Technology Choices and Rationale

### 1. **HTML/CSS/JavaScript**
- **HTML**: Used for structuring the gallery and content.
- **CSS**: Used for styling the gallery items, including the 3D transformations, positioning, and transitions.
- **JavaScript**: Handles the logic of moving through the carousel, dynamically updating the gallery items, and adding interactivity through keyboard and mouse events.

### 2. **CSS Transitions and Transforms**
- The use of CSS transitions (e.g., `transform`, `opacity`, etc.) allows smooth animations between gallery item states.
- The `rotateY` and `scale` properties are utilized to create a 3D effect, making the gallery visually interactive.

### 3. **Event-driven Architecture**
- JavaScript listens for both `keydown` (arrow keys) and `wheel` (mouse scroll) events to allow user interaction with the carousel.
  
The rationale behind this approach is to keep the project simple, easy to understand, and fully frontend-driven without the need for additional frameworks or libraries. This also ensures smooth animations and an interactive design using native browser technologies.

## ⚠️ Known Limitations/Trade-offs

### 1. Limited Browser Compatibility for `backdrop-filter`
- The `backdrop-filter` CSS property used for the blur effect may not be supported in all browsers, especially older versions. Users of unsupported browsers may not see the desired blur effect on the gallery items.

### 2. No Control Buttons
- The gallery is currently navigable via the up/down arrow keys and mouse scroll. However, there are no visible "Next" or "Previous" buttons for manual navigation. This limits accessibility for users who may prefer a more traditional UI interaction.

### 3. Responsiveness
- The gallery's layout is currently fixed with specific width/height values for the items (300px width and 200px height). On smaller screens or lower resolutions, the items may not scale properly. A more responsive layout could be implemented.


## 🚀 Future Improvements

### 1. Improve Responsiveness
- Implement a more dynamic, responsive design that adjusts the gallery layout for different screen sizes, ensuring better compatibility across devices.

### 2. Add Control Buttons
- Include "Next" and "Previous" buttons to allow users to manually navigate through the gallery in addition to keyboard and mouse scroll functionality.

### 3. Additional Interactivity
- Add more interactive features such as click events on gallery items to display additional information or open a larger view of the item.

