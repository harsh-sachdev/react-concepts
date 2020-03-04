import React from 'react';


const ChangeName = ({changeUsername}) => (
    <div className="change-name">
        <button onClick={()=> changeUsername('Jhon')}>Change Name</button>
    </div>
)

export default ChangeName;