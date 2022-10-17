import Event from "./demo-event-list"

const Events =({events,onDelete})=>{
    
    return(
        <>
        {events.map((task)=>{
            <Event key={task.id} task={task} onDelete={onDelete}/>
        })}
        </>
    )
}

export default Events