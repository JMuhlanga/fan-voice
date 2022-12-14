import React, { useState }  from 'react';

function Write({userProp}){
    const[title,setTitle ] = useState("");
    const[img,setImg] = useState("");
    const[content,setContent] = useState("");
    const[user,setUser] = useState("");
    const[category,setCategory] = ("");

    function handleSubmit(e){
        e.preventDefault();
        fetch("https://fan-voice-api-production-2957.up.railway.app/articles",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title:title,
            img:img,
            content:content,
            user_id:user,
            category_id:category,

        }) })
    }     
        
    

    function loginCheck(userProp){
        if (userProp=== null){
            (
                <>
                    <div className="container">
                        <h1>Warning: Unable to Write Article Unless You Log-in</h1>
                    </div>
                </>
            )
        }else{
            setUser(userProp.id)
            (
                <>
                    <div className="reg-form">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Title</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" value={title} onChange={(e) => setTitle(e.target.value)} />
                                <div id="emailHelp" className="form-text">Write Article Name Here</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Image</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" value={img} onChange={(e) => setImg(e.target.value)} />
                                <div id="emailHelp" className="form-text">Add your Article Image Here</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Category</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={category} onChange={(e) => setCategory(e.target.value)} />
                                <div id="emailHelp" className="form-text">For Sports type 1,for Pop-culture type 2, for Gaming type 3 </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Article</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={content} onChange={(e) => setContent(e.target.value)} />
                                <div id="emailHelp" className="form-text">Kindly add your article here</div>
                            </div>
                                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </>
            )
        }
    }


    return(
        <>
        <div className="container">
            {loginCheck}
        </div>
        </>
    )
}

export default Write;