import React from 'react';

const TaskCard = ({taskData}) => {
    const {status,count} = taskData
    return (
        <div className=' p-2'>
        <p className='bg-bgColor px-2 text-center text-textColor'>{status}</p>
        <p className='bg-bgColor px-2 text-center text-textColor'>{count}</p>

    </div>
    );
};

export default TaskCard;