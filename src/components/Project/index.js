import React, { useEffect } from "react";

function Project() {
    useEffect(() => {
        document.title = 'Projects'
      });
      
    return (
        <div>
            <h3>projects</h3>
        </div>
    )
}

export default Project;