# Goalie Moves

This React app, is a simple application designed to display random directions and move types at specified intervals. It provides a user interface to control the interval and showcases the chosen move type and direction dynamically.

## Features
- `Dynamic Display`: Randomly displays move types and directions at specified intervals.
- `Interval Control`: Allows users to adjust the interval for displaying new moves.

## Usage
1. Clone the Repository:
```git clone https://github.com/yourusername/react-imageframe-app.git```

2. Navigate to the Project Directory:
```cd react-imageframe-app```

3. Install Dependencies:
```npm install```

4. Run the App:
```npm start```

5. Open in Browser:
Open your web browser and go to http://localhost:3000 to view the app.

## Components
1. App Component
Location: src/App.js
This component serves as the main container for the ImageFrame component.

2. ImageFrame Component
Location: src/components/ImageFrame.js
This component is responsible for rendering the ImageFrame and controlling the interval and displayed moves.

### Components Interaction
The ImageFrame component generates random move types and directions based on the specified interval. Users can control the interval using a range input. The selected move type and direction are displayed dynamically.

## Code Structure
App.js: Sets up the main structure and includes the ImageFrame component.
ImageFrame.js: Contains the logic for generating random moves and displaying them. Handles user interaction for adjusting the interval.

### Dependencies
React: A JavaScript library for building user interfaces.
@material-ui/icons: Material-UI icons for displaying directional arrows.

## Screenshots

![Main page](screenshot.png)

## License
This app is released under MIT license. See the [LICENSE](LICENSE) file for details.
