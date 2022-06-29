import data from '../../data.json';

const assistant = () => {

    let newdata = data.filter(item => item.assistant === true);
    
    return (
        <div className="assistant-list">
            <h1>Assistant</h1>
                {newdata.map(item => (
                    
                    <ul key={item.id}>
                        <li>Assistant Name : {item.name}</li>
                        <li>Assistant Group : {item.group}</li>
                        <hr/>
                    </ul>
                    
                ))}
            
        </div>
    );
};
export default assistant;