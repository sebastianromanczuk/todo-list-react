const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <>
            <button
                className="article__button article__button--toggleDoneTasksHiding"
            >
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="article__button article__button--doAllTasksDoneButton"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </>
    )
);

export default Buttons;