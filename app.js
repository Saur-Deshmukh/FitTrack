document.getElementById("workout-form").addEventListener('submit',function(event){
    event.preventDefault();
    
    const date = document.getElementById('date').value;
    const type = document.getElementById('type').value;
    const duration = document.getElementById('duration').value;
    const intensity = document.getElementById('intensity').value;
    const notes = document.getElementById('notes').value;

    const workout = {
        date,
        type,
        duration,
        intensity,
        notes
    };
    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push(workout);
    localStorage.setItem('workouts',JSON.stringify(workouts));
    window.alert("Workout Logged succesfully!!");
    this.reset();
})
