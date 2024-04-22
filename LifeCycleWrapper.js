import Lifecycle from "./LifeCycle"

const lifeCycleWrapper = () => {
    const [isLifeCycleVisible, setLifeCycle] = useState(true)
    return (
        <div>
            {isLifeCycleVisible ? <Lifecycle /> : null}
            <input type='checkbox' checked={isLifeCycleVisible} onChange={() => setLifeCycle(!isLifeCycleVisible)} />
        </div>
    )
}

export default lifeCycleWrapper;