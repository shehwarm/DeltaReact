import { useState } from "react";

export default function CommentsForm({addNewComment}) {
    let [formData, setFormData] = useState({
        username: "",
        comment: "",
        rating: ""
    });

    let handleInputChange = (event) => { 
        setFormData( (currData) => {
            return {
                ...currData,
                [event.target.name]: event.target.value
            };
        });
    };

    let handleSubmit = (event) => {
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username: "",
            comment: "",
            rating: ""
        });
    };

    return (
        <div>
            <h2>Comments Section</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                placeholder="username" 
                type="text" 
                value={formData.username} 
                onChange={handleInputChange} 
                id="username"
                name="username"
                />
                <br></br>
                <br></br>

                <label htmlFor="comment">Comment</label>
                <textarea 
                placeholder="comment here" 
                value={formData.comment}
                onChange={handleInputChange}
                id="comment"
                name="comment"
                >
                </textarea>
                <br></br>
                <br></br>

                <label htmlFor="rating">Rating</label>
                <input 
                placeholder="rating" 
                type="number" min="1" max="5" 
                value={formData.rating} 
                onChange={handleInputChange}
                id="rating"
                name="rating"
                />
                <br></br>
                <br></br>
                <button>Submit Comment</button>
            </form>
        </div>
    );
}