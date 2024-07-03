import React from 'react'
import { useParams } from 'react-router-dom'

const Course = () => {
    const { course } = useParams();

    console.log(course);
  return (
    <div style={{marginTop: '70px'}}>
        Course &rarr; {course}
    </div>
  )
}

export default Course