import React from 'react';

import './course.style.css';

const Course = (props) =>{
    return( 
        
        <div class="course-container">
            {props.nameCourse}
        </div>  
    )
}
export default Course;
