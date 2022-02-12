import { useState } from "react";

function Folder( {explorer} ) {
    const [ expand, setExpand ] = useState(false); 

    var arrow = (!expand) ? "+" :  "-"

    if(explorer.isFolder){
        return (
            <div>
                <span onClick={() => setExpand(!expand)} style={{ cursor: "pointer" }}>
                    {arrow} <strong> {explorer.name} </strong>
                    <br/>
                </span>
                <div style={{ display: expand?"block":"none", paddingLeft: "15px" }} >
                    {explorer.items.map( (exp) => {
                        return <Folder explorer={exp} />
                    })}
                </div>
            </div>
        );
    }else{
        return <span style={{ paddingLeft: '15px' }}><i>{explorer.name}</i><br/></span>;
    }
    
}

export default Folder;