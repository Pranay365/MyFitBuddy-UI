export type WorkoutType={
    [date:string]:workout;
}

export type workout={
    [workoutname:string]:set[];
}

export type set={
    workoutId:string;
    workoutName:string;
    reps:number;
    weight:number;
}