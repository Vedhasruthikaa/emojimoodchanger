function MoodDisplay({value}) {
    const moods = {
        happy: "Keep Smiling!🥰",
        sad: "Relax! It's Okay to be sad sometimes❤️‍🩹",
        excited: "Let's celebrate!🎉",
        angry: "Take a Deep Breath!🤗"
    };

    return (
        <div className = "box">
            {value ? <p>{moods[value]}</p> : <p>Click on a Button!</p>}
            
        </div>
    );
}

export default MoodDisplay;