import DATA from '../../data.json';
const answerTwo = () => {

  let groupNames = DATA.reduce((result, item) => {
    result[item.group] = []
    return result;
  }, {});

  Object.keys(groupNames).forEach(group => {
    let findStudents = DATA.filter(student => student.group == group);
    groupNames[group] = findStudents;
  });


  

  return (
    <div className="gruop-list">
        <h1> OrangeRed</h1>
            {groupNames.OrangeRed.map(item => (
                <div className='orange-list' key={item.id}>
                    <ul>
                    <li>  {item.name}</li>
                    <li> Group : {item.group}</li>
                    <hr/>
                </ul>
                </div>
                
            ))}
        <h1> AliceBlue</h1>

            {groupNames.AliceBlue.map(item => (
                <div className='alice-list' key={item.id}>
                    <ul>
                    <li>  {item.name}</li>
                    <li> Group : {item.group}</li>
                    <hr/>
                </ul>
                </div>
                
            ))}
        <h1> DeepPink</h1>

            {groupNames.DeepPink.map(item => (
                <div className='deep-list' key={item.id}>
                    <ul>
                    <li>  {item.name}</li>
                    <li> Group : {item.group}</li>
                    <hr/>
                </ul>
                </div>
                
            ))}
        
    </div>
);
};

export default answerTwo;