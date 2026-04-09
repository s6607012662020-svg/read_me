import "./dumbbells.css";
import { useState } from "react";

function Dumbbells() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { id: 1, name: "Bicep Curl", muscles: "Biceps" },
    { id: 2, name: "Tricep Kickback", muscles: "Triceps" },
    { id: 3, name: "Shoulder Press", muscles: "Shoulders" },
    { id: 4, name: "Dumbbell Squat", muscles: "Legs" },
  ];

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <div className="dumbbells-page">
      <h1>Dumbbell Exercises</h1>
      <p>Click on an exercise to see the muscles it targets.</p>
      <div className="exercises">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="exercise-card"
            onClick={() => handleExerciseClick(exercise)}
          >
            <h3>{exercise.name}</h3>
          </div>
        ))}
      </div>
      {selectedExercise && (
        <div className="exercise-details">
          <h2>{selectedExercise.name}</h2>
          <p>Muscles Worked: {selectedExercise.muscles}</p>
        </div>
      )}
    </div>
  );
}

export default Dumbbells;